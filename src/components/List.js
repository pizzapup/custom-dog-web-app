import React, { useState, useEffect } from "react";
import { database as db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";
import Card from "./Card";

export default function List() {
  const [list, setList] = useState();
  useEffect(() => {
    const dbRef = ref(db, "posts/");
    onValue(dbRef, (snapshot) => {
      const posts = snapshot.val();
      const postList = [];
      for (let id in posts) {
        postList.push({ id, ...posts[id] });
      }
      setList(postList);
    });
  }, []);
  return (
    <>
      <ul>
        {list
          ? list.map((postData, index) => (
              <li key={postData.id}>
                <Card data={postData} postKey={postData.id} />
              </li>
            ))
          : "no saved posts"}
      </ul>
    </>
  );
}
