import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWzBl8d7W1zESsi2VO6y2jhplJYXzXNsE",
    authDomain: "vue-chat-3a141.firebaseapp.com",
    databaseURL: "https://vue-chat-3a141.firebaseio.com",
    projectId: "vue-chat-3a141",
    storageBucket: "vue-chat-3a141.appspot.com",
    messagingSenderId: "141108469313"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  export default firebaseApp.firestore();