import React, { useState } from "react";
import { writeData } from "../../firebase/dbHelpers";
import Form from "../Form";
import { Chonky as Chonk } from "../../images/customize-dog/body";
import { Closed, Squint, Round } from "../../images/customize-dog/eyes/preview";
import {
  Regular,
  Chonky,
  Medium,
} from "../../images/customize-dog/body/preview";

const uids = "default-user-id";

export default function CreatePost() {
  const initialValues = {
    eyes: "squinty",
    body: "medium",
    color: "#fafafa",
  };
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    writeData(values, ["posts", `user-posts/${uids}`]);
  };
  const fieldValues = {
    inputs: [
      { name: "name", type: "text" },
      {
        name: "color",
        type: "color",
        className: "post-color-picker",
      },
    ],
    fieldSetBody: [
      { value: "regular", img: Regular },
      { value: "medium", img: Medium },
      { value: "chonky", img: Chonky },
    ],
    fieldSetEyes: [
      { value: "closed", img: Closed },
      { value: "squinty", img: Squint },
      { value: "round", img: Round },
    ],
  };

  return (
    <>
      <Chonk fill={values.color} />
      <Form onSubmit={handleSubmit}>
        <Form.Inputs
          fieldValues={fieldValues.inputs}
          onChange={handleInputChange}
        />
        <Form.RadioImgGroup
          fieldValues={fieldValues.fieldSetBody}
          currVal={values.body}
          onChange={handleInputChange}
          legend={`Body: ${values.body}`}
          name="body"
        />
        {values.eyes}
        <Form.RadioImgGroup
          fieldValues={fieldValues.fieldSetEyes}
          currVal={values.eyes}
          onChange={handleInputChange}
          legend={`Eyes: ${values.eyes}`}
          name="eyes"
        />
      </Form>
    </>
  );
}
