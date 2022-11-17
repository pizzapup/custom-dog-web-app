import "./Input.css";

const Radio = ({ label, name, onChange, values }) => {
  return (
    <>
      <fieldset>
        <legend>{label}</legend>
        <ul>
          {values.map((value, id) => {
            return (
              <li key={id} className={value.img ? "inputgroup-img" : ""}>
                <label htmlFor={`${value.value}-input`}>{value.value}</label>
                <input
                  id={`${value.value}-input`}
                  type="radio"
                  value={value.value}
                  onChange={onChange}
                  name={name}
                />
                {value.img ? <img src={value.img} alt={value.value} /> : ""}
              </li>
            );
          })}
        </ul>
      </fieldset>
    </>
  );
};

const Checkbox = ({ label, name, onChange, values }) => {
  return (
    <>
      <fieldset>
        <legend>{label}</legend>
        <ul>
          {values.map((value, id) => {
            return (
              <li key={id} className={value.img ? "inputgroup-img" : ""}>
                <label htmlFor={`${value.value}-input`}>{value.value}</label>
                <input
                  id={`${value.value}-input`}
                  type="checkbox"
                  value={value.value}
                  onChange={onChange}
                  name={name}
                />
                {value.img ? <img src={value.img} alt={value.value} /> : ""}
              </li>
            );
          })}
        </ul>
      </fieldset>
    </>
  );
};
const InputGroup = { Radio, Checkbox };
export default InputGroup;
