import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputGroup from "../components/Input/InputGroup";
import Input from "../components/Input/Input";

export default function SignUp() {
  const [values, setValues] = useState("");
  const displayName = `${values.fName} ${values.lName}`;
  const email = values.email;
  const password = values.password;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  function submitForm(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, { displayName });
        const user = userCredential.user;
        console.table(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  }
  const fieldValues = [
    { name: "fname", type: "text" },
    { name: "lName", type: "text" },
    { name: "email", type: "email" },
    { name: "password", type: "password" },
    {
      name: "favAnimal",
      type: "radio-group",
      values: [{ value: "dog" }, { value: "cat" }, { value: "other" }],
    },
  ];

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={submitForm}>
        {fieldValues.map((field, index) => (
          <Input {...field} onChange={handleInputChange} key={field.value} />
        ))}
        <button type="submit">submit</button>
      </form>
    </>
  );
}
