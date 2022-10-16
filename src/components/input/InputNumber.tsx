import { InputProps, InputWrapper, stateClassName } from "./InputBase";

import { FunctionComponent } from "react";

interface InputNumberProps extends InputProps<number> {
  min?: number;
  max?: number;
}

const InputNumber: FunctionComponent<InputNumberProps> = (props) => {
  const [state, setState] = props.state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (Number.isNaN(value)) return;
    setState({
      value: event.target.valueAsNumber,
      valid: (props.min === undefined || value >= props.min) && (props.max === undefined || value <= props.max)
    });
  };

  return (
    <InputWrapper label={props.label}>
      <input
        type="number"
        id={props.name}
        name={props.name}
        className={`input ${stateClassName(state.valid)}`}
        placeholder={props.placeholder}
        value={state.value}
        onChange={onChange}
        min={props.min}
        max={props.max} />
    </InputWrapper>
  );
};

export default InputNumber;
