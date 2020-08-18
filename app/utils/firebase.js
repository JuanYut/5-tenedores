import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfTPlYToCKwKbekcYh4wxP3YM0s81gaDA",
  authDomain: "tenedores-557c5.firebaseapp.com",
  databaseURL: "https://tenedores-557c5.firebaseio.com",
  projectId: "tenedores-557c5",
  storageBucket: "tenedores-557c5.appspot.com",
  messagingSenderId: "825883946173",
  appId: "1:825883946173:web:21488841042cfdce839bd4",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
