import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';const firebaseConfig = {
    apiKey: "AIzaSyCsqh7_n5IvaQPKNBQFo5AQ8BVC7qOSU9c",
    authDomain: "netflix-clone-17730.firebaseapp.com",
    projectId: "netflix-clone-17730",
    storageBucket: "netflix-clone-17730.appspot.com",
    messagingSenderId: "161852731961",
    appId: "1:161852731961:web:e9de1cff2176622d1953e8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;