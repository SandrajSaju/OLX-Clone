import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADjFfB1htdmk1xf5sGnevPtXtpxBpeiDY",
  authDomain: "olx-clone-5e62e.firebaseapp.com",
  projectId: "olx-clone-5e62e",
  storageBucket: "olx-clone-5e62e.appspot.com",
  messagingSenderId: "1031771008667",
  appId: "1:1031771008667:web:ef7db02909ab09da0b603e",
  measurementId: "G-JVJZEZYECW"
};

  export default firebase.initializeApp(firebaseConfig)