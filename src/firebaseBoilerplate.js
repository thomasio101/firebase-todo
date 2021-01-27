import firebaseConfig from './secrets.json';
import firebase from 'firebase/app';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}