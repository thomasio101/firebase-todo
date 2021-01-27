import { useState } from 'react';
import { auth, firestore } from './firebaseBoilerplate';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUniqueId } from './utils';
import './TodoList.css';


export default function TodoList() {
    const todosRef = useTodosRef();
    const [todos] = useCollectionData(todosRef, { idField: 'id' });

    return (
        <div className="todo-list">
            <ul>
                {todos?.map(todo => <Todo todo={todo} key={todo.id}></Todo>)}
            </ul>
            <AddTodoForm />
        </div>
    );
}

function Todo({ todo }) {
    const todoRef = useTodosRef().doc(todo.id);

    const uniqueId = useUniqueId();

    /**
     * @param {boolean} finished 
     */
    const setFinished = async (finished) => {
        await todoRef.update({
            finished
        });
    }

    return (
        <li>
            <input type="checkbox" checked={todo.finished} onChange={e => setFinished(e.target.checked)} id={uniqueId} />
            <label htmlFor={uniqueId}>&nbsp;{todo.title}</label>
            <DeleteButton todo={todo}/>
        </li>
    )
}

function DeleteButton({todo}) {
    const todoRef = useTodosRef().doc(todo.id);

    const deleteTodo = async () => {
        await todoRef.delete();
    };

    return (
        <button className="delete-button" onClick={deleteTodo}>&times;</button>
    );
}

function AddTodoForm() {
    const todosRef = useTodosRef();

    const [title, setTitle] = useState("");

    /**
     * @param {Event} e 
     */
    const addTodo = async (e) => {
        e.preventDefault();

        await todosRef.add({
            title,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    };

    return (
        <form onSubmit={addTodo} className="todo-form">
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}

function useTodosRef() {
    const [user] = useAuthState(auth);
    return firestore.collection('users').doc(user?.uid).collection('todos')
}