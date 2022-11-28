const InputGroup = ({ legend, children }) => (
  <>
    <fieldset className="input-group">
      <legend>{legend}</legend>
      <ul>{children}</ul>
    </fieldset>
  </>
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
