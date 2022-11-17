import InputGroup from "./InputGroup";
import "./Input.css";

const Label = (props) =>
  props.label ? props.label : props.name ? props.name : "no label provided";
function Input(props) {
  return props.type === "radio-group" ? (
    <>
      <InputGroup.Radio {...props} />
    </>
  ) : (
    <>
      <Label {...props} />
      <input type={props.type} {...props} />
    </>
  );
}
// const Input = (props) => {
//   <>
//     <Label {...props} />
//     <input type={props.type} {...props} />
//   </>;
// };

Input.Text = (props) => <Input type="text" {...props} />;
Input.Color = (props) => <Input type="color" {...props} />;
Input.Email = (props) => <Input type="email" {...props} />;
Input.Radio = (props) => <Input type="radio" {...props} />;
Input.Checkbox = (props) => <Input type="checkbox" {...props} />;

export default Input;
