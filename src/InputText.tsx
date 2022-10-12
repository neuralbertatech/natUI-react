import { FunctionComponent, MutableRefObject, ReactElement, useState } from "react";
import BaseProps from "./baseProps";

interface InputTextProps extends BaseProps {
  placeholder: string;
  state: [InputTextState, React.Dispatch<React.SetStateAction<InputTextState>>];
  icon?: ReactElement;
  validation?: RegExp;
  disabled?: boolean;
}

interface InputTextState {
  value: string;
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

const InputText: FunctionComponent<InputTextProps> = (props) => {
  const [state, setState] = props.state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      value: event.target.value,
      valid: props.validation?.test(event.target.value)
    });
  };

  return (
    <div className={`control ${props.icon && "has-icons-left"}`}>
      <input
        type="text"
        className={`input ${stateClassName(state.valid)}`}
        placeholder={props.placeholder}
        value={state.value}
        onChange={onChange} />
      <span className="icon is-small is-left">
        {props.icon}
      </span>
    </div>
  );
};

export default InputText;
