//import * as firebase from 'firebase';

import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyAwL9JsMT0a7RFSdWIkotZTI97rQW_klWY",
  authDomain: "redux-firebase-1.firebaseapp.com",
  databaseURL: "https://redux-firebase-1-default-rtdb.firebaseio.com",
  projectId: "redux-firebase-1",
  storageBucket: "redux-firebase-1.appspot.com",
  messagingSenderId: "84513752227",
  appId: "1:84513752227:web:db1cd9209e244590deab16"
};

var database = null;

try {
  firebase.initializeApp(config);
  database = firebase.database();
} catch (err) {
  console.log(err);
}

export { database };
