import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyABPNI1OPuMIg7Zh9QaU-g1TuDEgCLBj9w",
  authDomain: "printjodgcom.firebaseapp.com",
  databaseURL: "https://printjodgcom-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "printjodgcom",
  storageBucket: "printjodgcom.appspot.com",
  messagingSenderId: "281692920512",
  appId: "1:281692920512:web:a524844e9f454e58e9ab25"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
