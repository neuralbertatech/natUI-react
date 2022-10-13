import { InputProps, stateClassName } from "./utils/inputBase";

import { FunctionComponent } from "react";

export interface InputTextProps extends InputProps<string> {
  type?: "text" | "email" | "password";
  validation?: RegExp;
}

// TODO: add some hover tooltip to explain why input might be invalid (new prop field)
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
        type={props.type}
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

InputText.defaultProps = { type: "text" };

export default InputText;
