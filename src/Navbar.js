import { auth } from './firebaseBoilerplate';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignOutButton from "./SignOutButton";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>
                Todos
            </h1>
            <UserChip />
        </nav>
    )
}

function UserChip() {
    const [user] = useAuthState(auth);

    console.log(user);

    return (
        <div className="user-chip">
            <img className="photo" src={user.photoURL} referrerpolicy="no-referrer"/>
            <span className="display-name">
                {user.displayName}
            </span>
            <SignOutButton />
        </div>
    )
}