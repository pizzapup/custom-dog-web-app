import React, { useState } from "react";
import { database } from "../utils/firebase";
import DogIcon from "../images/dog";
import { ref, push, child, update } from "firebase/database";
const db = database;
const uids = "default-user";

export default function Form() {
  const initialValues = {
    uids: uids,
    name: "",
    color: "#10b56c",
    location: "default-background",
  };
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const createPostObj = () => {
    const newPostKey = push(child(ref(db), "posts")).key;
    const updates = {};
    updates["/posts/" + newPostKey] = values;
    updates["/user-posts/" + uids + "/" + newPostKey] = values;
    return update(ref(db), updates)
      .then(() => {
        alert("Data saved successfully!");
      })
      .catch((error) => {
        alert("The write failed...");
      });
  };
  return (
    <>
      <DogIcon fill={values.color} />
      <form onSubmit={createPostObj}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={values.name}
          onChange={handleInputChange}
          name="name"
        />
        <label htmlFor="color">color</label>
        <input
          type="color"
          value={values.color}
          onChange={handleInputChange}
          name="color"
        />
        <label htmlFor="location">location</label>
        <input
          type="text"
          value={values.location}
          onChange={handleInputChange}
          name="location"
        />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
