import DogIcon from "../images/dog";
import { database as db } from "../utils/firebase";
import { ref, child, push, update, remove } from "firebase/database";
import { createElement, useState } from "react";
import Medium from "../images/customize-dog/body/Medium";
import Regular from "../images/customize-dog/body/Regular";
import Chonky from "../images/customize-dog/body/Chonky";
export default function Result({ data, postKey }) {
  const deletePost = () => {
    remove(ref(db, `/posts/${postKey}`));
    remove(ref(db, `/user-posts/${data.uids}/${postKey}`));
  };
  const updatePost = () => {
    const newUpdate = { ...data, name: "FIDO" };
    const updates = {};
    updates["/posts/" + postKey] = newUpdate;
    updates["/user-posts/" + data.uids + "/" + postKey] = newUpdate;
    return update(ref(db), updates);
  };
  const componentMapping = { Medium, Regular, Chonky };
  const body = componentMapping["Medium"];
  return (
    <>
      <div id={data.id}>
        {createElement(body, { fill: data.color })}
        <div>
          <ul>
            <li>name: {data.name}</li>
            <li>color: {data.color}</li>
            <li>location: {data.location}</li>
            <li>uids: {data.uids}</li>
            <li>id: {data.id}</li>
            <li>id: {postKey}</li>
          </ul>
        </div>
        <button onClick={deletePost}>delete</button>
        <button onClick={updatePost}>update</button>
      </div>
    </>
  );
}
