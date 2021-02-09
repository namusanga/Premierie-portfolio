import firebase from 'firebase'


var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDKjph7RYBjAQyd5m4O7o8uR2a-tzXfB98",
    authDomain: "portfolio-webpage-dbbd8.firebaseapp.com",
    projectId: "portfolio-webpage-dbbd8",
    storageBucket: "portfolio-webpage-dbbd8.appspot.com",
    messagingSenderId: "1040697235382",
    appId: "1:1040697235382:web:efd6b92fc457a8e0841317"
})


var db = firebaseApp.firestore();


export { db };