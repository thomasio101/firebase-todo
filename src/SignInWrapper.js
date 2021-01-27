import './firebaseBoilerplate';
import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/**
 * 
 * @param {{children: React.ReactNode}} param0 
 */
export default function SignInWrapper({ children }) {
    const [user, loading, error] = useAuthState(auth);
    
    const signInWithPopup = async (e) => {
        await auth.signInWithPopup(provider);
    };

    if (loading) return <span>Laden...</span>;
    else if (error != null) return <span>Er is een fout opgetreden. <code>{JSON.stringify(error)}</code></span>;
    else if (user != null) return children;
    else return (
        <div>
            <button onClick={signInWithPopup}>Inloggen met Google</button>
        </div>
    );
}