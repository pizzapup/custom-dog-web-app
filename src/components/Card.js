import DogIcon from "../images/dog";
import { database as db } from "../utils/firebase";
import { ref, child, push, update, remove } from "firebase/database";
import { useState } from "react";

export default function Card({ data, postKey }) {
  const postRef = ref(db, `/posts/${postKey}`);
  const deletePost = () => {
    return remove(postRef);
  };
  const updatePost = () => {
    const postKeys = push(child(ref(db), "posts"));
    const updates = {};
    updates["/posts/" + postKey] = { name: "fido" };
    updates["/user-posts/" + data.uids + "/" + postKey] = { name: "fido" };
    return push(ref(db), updates);
  };
  return (
    <>
      <div id={data.id}>
        <DogIcon fill={data.color} />
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
