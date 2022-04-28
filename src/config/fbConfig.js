import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Replace this with your own config details
var config = {
  apiKey: 'AIzaSyAWI7ciGoQW0BDpWO5sH9yMgTNNdhx54KY',
  authDomain: 'testtype-73020.firebaseapp.com',
  databaseURL: 'https://testtype-73020-default-rtdb.firebaseio.com',
  projectId: 'testtype-73020',
  storageBucket: 'testtype-73020.appspot.com',
  messagingSenderId: '800192111407',
  appId: '1:800192111407:web:3dffbc1b8c187e087a37da',
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true, merge: true });
firebase.auth();

export default firebase;
