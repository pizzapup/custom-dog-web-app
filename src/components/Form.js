import Input from "./Input/Input";
import InputGroup from "./Input/InputGroup";

export default function Form({ onSubmit, btn, children }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit">{btn ? btn : "Submit"}</button>
      </form>
    </>
  );
}
Form.Inputs = ({ fieldValues, onChange, ...rest }) => (
  <>
    {fieldValues.map((field, index) => (
      <Input {...field} onChange={onChange} key={index} {...rest} />
    ))}
  </>
);
Form.RadioImgGroup = ({ fieldValues, onChange, currVal, legend, name }) => (
  <InputGroup legend={legend}>
    {fieldValues.map((value, id) => (
      <InputGroup.Radio
        key={id}
        classNamed={
          value.value === currVal.body ? "inputgroup-img--selected" : ""
        }
        value={value.value}
        onChange={onChange}
        name={name}
        img={value.img}
      />
    ))}
  </InputGroup>
);
