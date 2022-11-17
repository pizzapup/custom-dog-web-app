import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
// import { FForm } from "../components/Form";
import Input from "../components/Input/Input";

const auth = getAuth();
function CreateUser({ email, password }) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
export function LoginForm() {
  const [values, setValues] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const fieldValues = [
    { name: "name", type: "text" },
    { name: "email", type: "email" },
    { name: "password", type: "password" },
  ];
  return (
    <>
      <form onSubmit={CreateUser}>
        {fieldValues.map((field, index) => (
          <Input {...field} onChange={handleInputChange} />
        ))}
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
