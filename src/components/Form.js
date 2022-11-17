// import React, { useState } from "react";
// import { database } from "../utils/firebase";
// import DogIcon from "../images/dog";
// import { ref, push, child, update } from "firebase/database";
// import { Closed, Squint, Round } from "../images/customize-dog/eyes/preview";
// import { Regular, Chonky, Medium } from "../images/customize-dog/body/preview";
// import Form2 from "./Form/Form";

// const db = database;
// const uids = "default-user";

// export default function Form() {
//   const [values, setValues] = useState("");

//   const formReturn = (e) => setValues(e);
//   const createPostObj = (e) => {
//     e.preventDefault();
//     const newPostKey = push(child(ref(db), "posts")).key;
//     const postData = { ...values, uids };
//     const updates = {};
//     updates["/posts/" + newPostKey] = postData;
//     updates["/user-posts/" + uids + "/" + newPostKey] = postData;
//     return update(ref(db), updates)
//       .then(() => {
//         alert("Data saved successfully!");
//       })
//       .catch((error) => {
//         alert("The write failed...");
//       });
//   };
//   const fieldValues = [
//     { name: "name", type: "text" },
//     { name: "color", type: "color" },
//     {
//       name: "body",
//       type: "radio-group",
//       label: "Body Options",
//       values: [
//         { value: "regular", img: Regular },
//         { value: "medium", img: Medium },
//         { value: "chonky", img: Chonky },
//       ],
//     },
//     {
//       name: "eyes",
//       type: "radio-group",
//       label: "Eye Options",
//       values: [
//         { value: "closed", img: Closed },
//         { value: "squinty", img: Squint },
//         { value: "round", img: Round },
//       ],
//     },
//   ];
//   return (
//     <>
//       <DogIcon fill={values.color} />
//       <Form2
//         fieldValues={fieldValues}
//         onSubmit={createPostObj}
//         formReturn={formReturn}
//         buttonText="form!"
//       />
//     </>
//   );
// }
