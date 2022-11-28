import React, { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { database as db } from "../firebase/firebaseConfig";
import Result from "./Result";
import List from "./List";
const Card = Result;

export default function PostList() {
  return (
    <>
      <List dbTarget="posts" component={Card} />
    </>
  );
}
