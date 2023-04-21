import { DEFAULT_INPUT_STATE_NUMBER, InputState, InputWrapper, stateClassName } from "./InputBase";

import type { FunctionComponent } from "react";
import type { InputProps } from "./InputBase";
import { useState } from "react";

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
 * @param [icon] {ReactElement} The icon to display inside the input field.
 * @param [disabled] {disabled} Whether the input tag is disabled or not.
 * @param [min] {number} Minimum number for validation.
 * @param [max] {number} Maximum number for validation.
 * @param [required=false] {boolean} If this field is required or not.
 * @param [onChange] {(value: string, valid?: boolean) => void} Listener that gets triggered when the value changes.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const InputNumber: FunctionComponent<InputNumberProps> = ({ name, label, placeholder, icon, disabled, min, max, required = false, onChange }) => {
  const [state, setState] = useState<InputState<number>>(DEFAULT_INPUT_STATE_NUMBER);

  const innerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (Number.isNaN(value)) return;
    const newState = {
      value: event.target.valueAsNumber,
      valid: (min === undefined || value >= min) && (max === undefined || value <= max)
    };
    if (onChange) {
      onChange(newState.value, newState.valid);
    }
    setState(newState);
  };


  return (
    <InputWrapper label={label} icon={icon} required={required}>
      <input
        type="number"
        id={name}
        name={name}
        className={`input ${stateClassName(state.valid)} ${disabled ? "disabled" : ""}`}
        placeholder={placeholder}
        value={state.value}
        onChange={innerOnChange}
        min={min}
        max={max}
        required={required}
      />
    </InputWrapper>
  );
};

export default InputNumber;
