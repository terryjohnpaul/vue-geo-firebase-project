import firebase from "firebase";
import firestore from "firebase/firestore";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxralE0MeYgIq7qGkkKY6vfi9vDriEF7A",
  authDomain: "geo-vue-terry.firebaseapp.com",
  databaseURL: "https://geo-vue-terry.firebaseio.com",
  projectId: "geo-vue-terry",
  storageBucket: "geo-vue-terry.appspot.com",
  messagingSenderId: "470360296478"
};
const firebaseApp = firebase.initializeApp(config);
//inorder to remove error from upgraded firebase version
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
