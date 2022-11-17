import { useState } from "react";
import { ref, push, child, update } from "firebase/database";
import Input from "../Input/Input";

export default function Form({
  fieldValues,
  onSubmit,
  formReturn,
  buttonText,
}) {
  const [values, setValues] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    formReturn(values);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        {fieldValues.map((field, index) => (
          <Input {...field} onChange={handleInputChange} />
        ))}
        <button type="submit">{buttonText}</button>
      </form>
    </>
  );
}
