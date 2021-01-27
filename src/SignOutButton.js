import { auth } from './firebaseBoilerplate';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function SignOutButton() {
    const [user] = useAuthState(auth);
    
    const signOut = async (e) => {
        await auth.signOut();
    };

    return <button onClick={signOut} disabled={user == null}>Uitloggen</button>;
}