import './firebaseBoilerplate';
import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();

export default function SignOutButton() {
    const [user] = useAuthState(auth);
    
    const signOut = async (e) => {
        await auth.signOut();
    };

    return <button onClick={signOut} disabled={user == null}>Uitloggen</button>;
}