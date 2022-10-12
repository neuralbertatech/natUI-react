import { FunctionComponent, MutableRefObject, ReactElement, useState } from "react";
import BaseProps from "./baseProps";

interface InputNumberProps extends BaseProps {
  placeholder: string;
  state: [InputNumberState, React.Dispatch<React.SetStateAction<InputNumberState>>];
  min?: number;
  max?: number;
  icon?: ReactElement;
  disabled?: boolean;
}

interface InputNumberState {
  value: number;
  valid?: boolean;
}

const stateClassName = (state: boolean | undefined) => {
  switch (state) {
    case true:
      return "is-success";
    case false:
      return "is-danger";
    default:
      return "";
  }
};

const InputNumber: FunctionComponent<InputNumberProps> = (props) => {
  const [state, setState] = props.state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") return;
    const value = parseInt(event.target.value, 10);
    setState({
      value: value,
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
