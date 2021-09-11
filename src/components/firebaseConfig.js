import dotenv from 'dotenv'
import firebase from 'firebase';
dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyD-b8mS6__EJWSyMUZWIsuW64JwpNwR_pw",
  authDomain: "five-star-54179.firebaseapp.com",
  projectId: "five-star-54179",
  storageBucket: "five-star-54179.appspot.com",
  messagingSenderId: "319929479179",
  appId: "1:319929479179:web:985e5168de1bad0e52570e"
};
  const firebaseApp = firebase.initialize(firebaseConfig);
  const firestore = firebaseApp.firestore()

  export default firestore;