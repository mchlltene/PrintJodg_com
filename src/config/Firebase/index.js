import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDlffJPryLjHT1w9kt30zc46fqspyDoHSw",
    authDomain: "printjodang.firebaseapp.com",
    databaseURL: "https://printjodang-default-rtdb.firebaseio.com",
    projectId: "printjodang",
    storageBucket: "printjodang.appspot.com",
    messagingSenderId: "673549760226",
    appId: "1:673549760226:web:24b69cc1d9fc175f6710bb",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;