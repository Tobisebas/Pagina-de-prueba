// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwj_fvj-FLhQ3OAlfdOTHLZYyv7QZBUn8",
    authDomain: "pagina-de-prueba-5694d.firebaseapp.com",
    projectId: "pagina-de-prueba-5694d",
    storageBucket: "pagina-de-prueba-5694d.appspot.com",
    messagingSenderId: "53914227308",
    appId: "1:53914227308:web:de0786462389bbcec0fe49",
    measurementId: "G-2RR1PJT4R6"
};

// Initialize Firebase

if (!firebase.app.length) {
    initializeApp(firebaseConfig)
}
const analytics = getAnalytics(app);

const auth = firebase.auth()

export {
    auth,
    firebase
}