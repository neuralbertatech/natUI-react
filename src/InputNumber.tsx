import { InputProps, stateClassName } from "./utils/inputBase";

import { FunctionComponent } from "react";

interface InputNumberProps extends InputProps<number> {
  min?: number;
  max?: number;
}

const InputNumber: FunctionComponent<InputNumberProps> = (props) => {
  const [state, setState] = props.state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (value === NaN) return;
    setState({
      value: event.target.valueAsNumber,
      valid: (props.min === undefined || value >= props.min) && (props.max === undefined || value <= props.max)
    });
  };

  return (
    <div className={`control ${props.icon && "has-icons-left"}`}>
      <input
        type="number"
        className={`input ${stateClassName(state.valid)}`}
        placeholder={props.placeholder}
        value={state.value}
        onChange={onChange}
        min={props.min}
        max={props.max} />
      <span className="icon is-small is-left">
        {props.icon}
      </span>
    </div>
  );
};

export default InputNumber;
