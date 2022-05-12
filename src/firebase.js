import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqKCAjtUkqjjSMQRvef4I_eHWuT8pRH60",
    authDomain: "management-app-46e62.firebaseapp.com",
    projectId: "management-app-46e62",
    storageBucket: "management-app-46e62.appspot.com",
    messagingSenderId: "825288997038",
    appId: "1:825288997038:web:637357f274eb531132553f",
    measurementId: "G-MHF0Q6G63R"
};

const firebasApp = firebase.initializeApp(firebaseConfig);

const db = firebasApp.firestore();

export default db