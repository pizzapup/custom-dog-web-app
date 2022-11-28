function Input(props) {
  const getLabel = props.label
    ? props.label
    : props.name
    ? props.name
    : "no label provided";
  return (
    <>
      <label htmlFor={getLabel}>{getLabel}</label>
      <input {...props} type={props.type} />
    </>
  );
}

Input.Text = (props) => <Input type="text" {...props} />;
Input.Color = (props) => <Input type="color" {...props} />;
Input.Email = (props) => <Input type="email" {...props} />;
Input.Radio = (props) => <Input type="radio" {...props} />;
Input.Checkbox = (props) => <Input type="checkbox" {...props} />;

export default Input;
