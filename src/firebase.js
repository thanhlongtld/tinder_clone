import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzPCgLLQNoqvBnTVHiEwODgQ0jM1UFxi4",
    authDomain: "tinder-clone-c4eff.firebaseapp.com",
    databaseURL: "https://tinder-clone-c4eff.firebaseio.com",
    projectId: "tinder-clone-c4eff",
    storageBucket: "tinder-clone-c4eff.appspot.com",
    messagingSenderId: "409070240958",
    appId: "1:409070240958:web:a3934cd1ac80088ba54aef",
    measurementId: "G-VBETHP1F0J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;