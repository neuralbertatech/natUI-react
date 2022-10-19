import { InputWrapper, stateClassName } from "./InputBase";

import { FunctionComponent } from "react";
import type { InputProps } from "./InputBase";

/**
 * @interface
 * @property [min] {number} Minimum number for validation.
 * @property [max] {number} Maximum number for validation.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface InputNumberProps extends InputProps<number> {
  min?: number;
  max?: number;
}

/**
 * InputNumber Component
 * @component
 * @param name {string} The html name attribute for the input tag.
 * @param label {string} The text for the html label tag.
 * @param placeholder {string} The input placeholder.
 * @param state {Array<InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>>} The state for the input. Can be created with useState<InputState<?>>().
 * @param [icon] {ReactElement} The icon to display inside the input field.
 * @param [disabled] {disabled} Whether the input tag is disabled or not.
 * @param [min] {number} Minimum number for validation.
 * @param [max] {number} Maximum number for validation.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
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
