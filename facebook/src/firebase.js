import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCRNjMBxI7EbB1tQqcmgiEEx-SLbM-_flg",
    authDomain: "facebook-10bc7.firebaseapp.com",
    databaseURL: "https://facebook-10bc7.firebaseapp.com" ,
    projectId: "facebook-10bc7",
    storageBucket: "facebook-10bc7.appspot.com",
    messagingSenderId: "446986377546",
    appId: "1:446986377546:web:649a93eeb6ae58ba8389b3",
    measurementId: "G-D7RCYN06SC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;