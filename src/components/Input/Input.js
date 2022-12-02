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



export default Input;
