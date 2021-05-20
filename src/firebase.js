import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyAWNAFqRggn7mHFPXsipHPTIXZEb5giiRo",
    authDomain: "fir-b67f4.firebaseapp.com",
    projectId: "fir-b67f4",
    storageBucket: "fir-b67f4.appspot.com",
    messagingSenderId: "1019178701054",
    appId: "1:1019178701054:web:b8a9b42e76b080c4ef15af",
    measurementId: "G-8P3NHQSMCE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth};
export default db;