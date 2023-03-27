import { InputWrapper, stateClassName } from "./InputBase";

import type { FunctionComponent } from "react";
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
 * @param [required=false] {boolean} If this field is required or not.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const InputNumber: FunctionComponent<InputNumberProps> = ({ name, label, placeholder, state, icon, disabled, min, max, required = false }) => {
  const [innerState, setState] = state;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (Number.isNaN(value)) return;
    setState({
      value: event.target.valueAsNumber,
      valid: (min === undefined || value >= min) && (max === undefined || value <= max)
    });
  };

  return (
    <InputWrapper label={label} icon={icon} required={required}>
      <input
        type="number"
        id={name}
        name={name}
        className={`input ${stateClassName(innerState.valid)} ${disabled ? "disabled" : ""}`}
        placeholder={placeholder}
        value={innerState.value}
        onChange={onChange}
        min={min}
        max={max}
        required={required}
      />
    </InputWrapper>
  );
};

export default InputNumber;
