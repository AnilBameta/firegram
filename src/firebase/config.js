import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsAZkFC7vsm0VRWS6AHVcRAF9Em851qp0",
    authDomain: "firegram-429a2.firebaseapp.com",
    projectId: "firegram-429a2",
    storageBucket: "firegram-429a2.appspot.com",
    messagingSenderId: "872874394549",
    appId: "1:872874394549:web:fa614bfae17dcb20cb8ffc"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore,projectStorage,timestamp};
  