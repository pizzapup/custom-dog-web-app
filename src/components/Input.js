const Input = ({ label, name, type, value, onChange, children, ...rest }) => {
  return (
    <>
      <label htmlFor={label}></label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        {...rest}
      />
    </>
  );
};
Input.Color = (props) => (
  <>
    <label htmlFor={props.label}></label>
    <input type="color" {...props} />
  </>
);
Input.Text = (props) => (
  <>
    <label htmlFor={props.label}></label>
    <input type="text" {...props} />
  </>
);
Input.Radio = (props) => (
  <>
    <label htmlFor={props.label}></label>
    <input type="radio" {...props} />
  </>
);
Input.Checkmark = (props) => (
  <>
    <label htmlFor={props.label}></label>
    <input type="checkmark" {...props} />
  </>
);

const RadioGroup = ({ legend, name, onChange, values }) => {
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {values.map((value, id) => {
          return (
            <li key={id}>
              <input type="radio" value={value} onChange={onChange} />
            </li>
          );
        })}
      </fieldset>
    </>
  );
};
const CheckmarkGroup = ({ legend, name, onChange, values }) => {
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        {values.map((value, id) => {
          return (
            <li key={id}>
              <input type="checkmark" value={value} onChange={onChange} />
            </li>
          );
        })}
      </fieldset>
    </>
  );
};
// import React, { Fragment, useState } from "react";

// function FastInput({ name }) {
//   const [value, setValue] = useState("");
//   return (
//     <Fragment key={name}>
//       <label htmlFor={`${name}-input`}>{name}:</label>
//       <input
//         id={`${name}-input`}
//         name={name}
//         type="text"
//         onChange={(event) => setValue(event.currentTarget.value)}
//         pattern="[a-z]{3,10}"
//       />
//     </Fragment>
//   );
// }
// function FastForm() {
//   function handleSubmit(event) {
//     event.preventDefault();
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <FastInput key="name" name="name" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
