import React, { useState } from "react";
import { database } from "../utils/firebase";
import DogIcon from "../images/dog";
import { ref, push, child, update } from "firebase/database";
import Closed from "../images/customize-dog/eyes/preview-closed.png";
import Squint from "../images/customize-dog/eyes/preview-squint.png";
import Round from "../images/customize-dog/eyes/preview-round.png";
import Regular from "../images/customize-dog/body/preview-regular.png";
import Medium from "../images/customize-dog/body/preview-medium.png";
import Chonk from "../images/customize-dog/body/preview-chonk.png";
const db = database;
const uids = "default-user";

export default function Form() {
  const [values, setValues] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const createPostObj = (e) => {
    e.preventDefault();
    const newPostKey = push(child(ref(db), "posts")).key;
    const postData = { ...values, uids };
    const updates = {};
    updates["/posts/" + newPostKey] = postData;
    updates["/user-posts/" + uids + "/" + newPostKey] = postData;
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
        <input type="text" onChange={handleInputChange} name="name" />
        <input type="color" onChange={handleInputChange} name="color" />
        <fieldset>
          <legend>Body Options</legend>
          <ul>
            <li>
              <label htmlFor="regular">Regular</label>
              <input
                type="radio"
                value="Regular"
                name="body"
                onChange={handleInputChange}
              />
              <img
                alt="regular body"
                src={Regular}
                height="100px"
                width="100px"
              />
            </li>
            <li>
              <label htmlFor="medium">Medium</label>
              <input
                type="radio"
                value="Medium"
                name="body"
                onChange={handleInputChange}
              />
              <img
                alt="medium body"
                src={Medium}
                height="100px"
                width="100px"
              />
            </li>
            <li>
              <label htmlFor="chonky">Chonk</label>
              <input
                type="radio"
                value="Chonky"
                name="body"
                onChange={handleInputChange}
              />
              <img alt="chonky body" src={Chonk} height="100px" width="100px" />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Eye Options</legend>
          <ul>
            <li>
              <label htmlFor="closed">Closed</label>
              <input
                type="radio"
                value="Closed"
                name="eyes"
                onChange={handleInputChange}
              />
              <img
                alt="closed eyes"
                src={Closed}
                height="100px"
                width="100px"
              />
            </li>
            <li>
              <label htmlFor="squinty">Squinty</label>
              <input
                type="radio"
                value="Squinty"
                name="eyes"
                onChange={handleInputChange}
              />
              <img
                alt="squinty eyes"
                src={Squint}
                height="100px"
                width="100px"
              />
            </li>
            <li>
              <label htmlFor="round">Round</label>
              <input
                type="radio"
                value="Round"
                name="eyes"
                onChange={handleInputChange}
              />
              <img alt="round eyes" src={Round} height="100px" width="100px" />
            </li>
          </ul>
        </fieldset>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
