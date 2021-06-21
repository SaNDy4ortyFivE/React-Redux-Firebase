//import * as firebase from 'firebase';

import app from 'firebase/app';

// Your web app's Firebase configuration
var config = {
  apiKey: 'AIzaSyAwL9JsMT0a7RFSdWIkotZTI97rQW_klWY',
  authDomain: 'redux-firebase-1.firebaseapp.com',
  databaseURL: 'https://redux-firebase-1-default-rtdb.firebaseio.com',
  projectId: 'redux-firebase-1',
  storageBucket: 'redux-firebase-1.appspot.com',
  messagingSenderId: '84513752227',
  appId: '1:84513752227:web:db1cd9209e244590deab16'
};

var my_app = app.initializeApp(config, 'my_app');

console.log(app);

const database = db.database();

export { database };
