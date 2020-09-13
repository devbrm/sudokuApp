import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDI48wefq-0EtVcxXPT9-QF1RW8kLW2cog",
  authDomain: "sudoku-game-6d16e.firebaseapp.com",
  databaseURL: "https://sudoku-game-6d16e.firebaseio.com",
  projectId: "sudoku-game-6d16e",
  storageBucket: "sudoku-game-6d16e.appspot.com",
  messagingSenderId: "72397466967",
  appId: "1:72397466967:web:2345c4e691f8a1ff106212",
  measurementId: "G-P8FS1CC5NC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const ref = db.ref(`highScores`);
