import React, { useState } from "react";
import { writeData } from "../../firebase/dbHelpers";
import InputGroup from "../Input/InputGroup";
import fieldValues from "./data";
import DogPreview from "./DogPreview";

const uids = "default-user-id";

export default function CustomDog() {
  const initialValues = {
    name: "fido",
    eyes: "squinty",
    body: "medium",
    color: "#c7875b",
    nose: "snout",
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
  const inputSets = [
    {
      fieldValues: fieldValues.eyes,
      currVal: values.eyes,
      onChange: handleInputChange,
      legend: `Eyes: ${values.eyes}`,
      name: "eyes",
    },
    {
      fieldValues: fieldValues.body,
      currVal: values.body,
      onChange: handleInputChange,
      legend: `Body: ${values.body}`,
      name: "body",
    },
    {
      fieldValues: fieldValues.nose,
      currVal: values.nose,
      onChange: handleInputChange,
      legend: `Nose: ${values.nose}`,
      name: "nose",
    },
  ];
  return (
    <>
      <DogPreview values={values} />
      <form className="custom-dog-form" onSubmit={handleSubmit}>
        <InputGroup.Fieldset
          legend={`Name & Color: ${values.name} | ${values.color}`}
          fieldValues={fieldValues.inputs}
          onChange={handleInputChange}
        />
        <InputGroup.ImgRadio {...inputSets[1]} />
        <InputGroup.ImgRadio {...inputSets[0]} />
      </form>
    </>
  );
}
