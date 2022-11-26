import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("hello user!");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
