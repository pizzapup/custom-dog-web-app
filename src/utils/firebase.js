// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9uwuEFsBaewmFENwglJlqGWU1E9eMapI",
  authDomain: "custom-portrait-app.firebaseapp.com",
  projectId: "custom-portrait-app",
  storageBucket: "custom-portrait-app.appspot.com",
  messagingSenderId: "916897874575",
  appId: "1:916897874575:web:2bab134f171f88fc7ea6fa",
  measurementId: "G-9RBVW8TJLN",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://custom-portrait-app-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
