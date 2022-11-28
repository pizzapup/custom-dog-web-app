import React, { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { database as db } from "../../firebase/firebaseConfig";
import Result from "../Card/Result";
const Card = Result;

export default function List(props) {
  const [list, setList] = useState();
  useEffect(() => {
    const dbRef = ref(db, `posts/`);
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
