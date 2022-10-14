import { InputProps, InputWrapper, stateClassName } from "./InputBase";

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
    <InputWrapper label={props.label}>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        className={`input ${stateClassName(state.valid)}`}
        placeholder={props.placeholder}
        value={state.value}
        onChange={onChange} />
    </InputWrapper>
  );
};

InputText.defaultProps = { type: "text" };

export default InputText;
