// import React, { useState } from "react";
// import { writeData } from "../../firebase/dbHelpers";
// import Form from "../Form/Form";
// import { Chonky as Chonk } from "../../images/customize-dog/body";
// import { Closed, Squint, Round } from "../../images/customize-dog/eyes/preview";
// import {
//   Regular,
//   Chonky,
//   Medium,
// } from "../../images/customize-dog/body/preview";
// import ClosedEyes from "../../images/customize-dog/eyes/Closed";
// import SnoutNose from "../../images/customize-dog/snout/Snout";
// import SmallTail from "../../images/customize-dog/tail/preview-chi.png";
// import ButtonNose from "../../images/customize-dog/snout/Button";
// const uids = "default-user-id";

import CustomDog from "../CustomDog/CustomDog";

// export default function CreatePost() {
//   const initialValues = {
//     name: "fido",
//     eyes: "squinty",
//     body: "medium",
//     color: "#c7875b",
//   };
//   const [values, setValues] = useState(initialValues);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     writeData(values, ["posts", `user-posts/${uids}`]);
//   };

//   return (
//     <>
//       <div className="chonk-container">
//         <Chonk fill={values.color} />
//         <ClosedEyes />
//         <ButtonNose />
//       </div>
//       <Form className="custom-dog-form" onSubmit={handleSubmit}>
//         <fieldset className="custom-dog-form--fieldset">
//           <legend>
//             Name & Color: {values.name} | {values.color}
//           </legend>
//           <Form.Inputs
//             fieldValues={fieldValues.inputs}
//             onChange={handleInputChange}
//           />
//         </fieldset>
//         <Form.RadioImgGroup
//           fieldValues={fieldValues.fieldSetBody}
//           currVal={values.body}
//           onChange={handleInputChange}
//           legend={`Body: ${values.body}`}
//           name="body"
//         />
//         {values.eyes}
//         <Form.RadioImgGroup
//           fieldValues={fieldValues.fieldSetEyes}
//           currVal={values.eyes}
//           onChange={handleInputChange}
//           legend={`Eyes: ${values.eyes}`}
//           name="eyes"
//         />
//       </Form>
//     </>
//   );
// }
const CreatePost = () => <CustomDog />;
export default CreatePost;
