import Input from "./Input";

const InputGroup = ({ legend, children }) => (
  <>
    <fieldset className="input-group">
      <legend>{legend}</legend>
      <ul>{children}</ul>
    </fieldset>
  </>
);
InputGroup.MapInput = ({ fieldValues, onChange, ...rest }) => (
  <>
    {fieldValues.map((field, index) => (
      <Input {...field} onChange={onChange} key={index} {...rest} />
    ))}
  </>
);
InputGroup.Fieldset = ({
  fieldValues,
  onChange,
  legend,
  fieldsetClass,
  ...rest
}) => (
  <>
    <fieldset className={fieldsetClass}>
      <legend>{legend}</legend>
      {fieldValues.map((field, index) => (
        <Input {...field} onChange={onChange} key={index} {...rest} />
      ))}
    </fieldset>
  </>
);
InputGroup.ImgRadio = ({ fieldValues, onChange, currVal, legend, name }) => (
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
InputGroup.Radio = ({ value, onChange, name, img, classNamed }) => (
  <li className={`inputgroup-img ${classNamed}`}>
    <label htmlFor={`${value}-input`}>{value}</label>
    <input
      type="radio"
      value={value}
      onChange={onChange}
      name={name}
      id={`${value}-input`}
    />
    {img ? <img src={img} alt={value} /> : ""}
  </li>
);

InputGroup.Checkbox = ({ value, onChange, name, img, classNamed }) => (
  <li className={`inputgroup-img ${classNamed}`}>
    <label htmlFor={`${value}-input`}>{value}</label>
    <input
      type="checkbox"
      value={value}
      onChange={onChange}
      name={name}
      id={`${value}-input`}
    />
    {img ? <img src={img} alt={value} /> : ""}
  </li>
);
export default InputGroup;
