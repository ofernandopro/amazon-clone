import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPBCbqazqYk_DDX0i63lgfy-TCivlVlf8",
  authDomain: "clone-f28ff.firebaseapp.com",
  projectId: "clone-f28ff",
  storageBucket: "clone-f28ff.appspot.com",
  messagingSenderId: "537709774033",
  appId: "1:537709774033:web:b603ea16f098f884e431f0",
  measurementId: "G-0CSMQ5PCHP"
});

const auth = firebase.auth();

export { auth };