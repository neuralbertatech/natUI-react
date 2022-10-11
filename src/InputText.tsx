import { FunctionComponent, MutableRefObject, ReactElement, useState } from "react";
import BaseProps from "./baseProps";

interface Listener {
  [key: string]: string | number;
}

interface InputTextProps extends BaseProps {
  placeholder: string;
  id: string;
  listener: Listener;
  icon?: ReactElement;
  validation?: RegExp;
  disabled?: boolean;
}

enum inputState {
  default = "",
  error = "error",
  success = "success",
}

const stateClassName = (state: string) => {
  switch (state) {
    case inputState.error:
      return "is-danger";
    case inputState.success:
      return "is-success";
    default:
      return "";
  }
};

const InputText: FunctionComponent<InputTextProps> = (props) => {
  const [value, setValue] = useState("");
  const [state, setState] = useState(inputState.default);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.validation !== undefined) {
      setState(props.validation.test(event.target.value) ?
        inputState.success : inputState.error);
    }
    props.listener[props.id] = event.target.value;
  };
  return (
    <input
      type="text"
      className={`input ${stateClassName(state)}`}
      placeholder={props.placeholder}
      value={value}
      onChange={onChange} />
  );
};

export default InputText;
