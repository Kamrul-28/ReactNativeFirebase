import firebase from 'firebase';
 // Your web app's Firebase configuration
 let config = {
    apiKey: "AIzaSyBTBIQnip3O_LluumWAc4f87UU3pWoWdBc",
    authDomain: "reactnativedemo-91ac3.firebaseapp.com",
    databaseURL: "https://reactnativedemo-91ac3.firebaseio.com",
    projectId: "reactnativedemo-91ac3",
    storageBucket: "reactnativedemo-91ac3.appspot.com",
    messagingSenderId: "364708608129",
    appId: "1:364708608129:web:fdfcc4a12bb8eb532ff580",
    measurementId: "G-3MEQ31RBZS"
  };
  // Initialize Firebase
  let app = firebase.initializeApp(config);
  export const db = app.database();