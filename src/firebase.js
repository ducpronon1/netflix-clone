import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQPfACkwj8s9oSOfJ9x6Ih4Y5pX4-6pqY",
  authDomain: "netfix-clone-27e25.firebaseapp.com",
  projectId: "netfix-clone-27e25",
  storageBucket: "netfix-clone-27e25.appspot.com",
  messagingSenderId: "201331237759",
  appId: "1:201331237759:web:b183ef22be83fbe829304a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
