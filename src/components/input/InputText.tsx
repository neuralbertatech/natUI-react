import { DEFAULT_INPUT_STATE_STRING, InputWrapper, stateClassName } from "./InputBase";
import type { InputProps, InputState } from "./InputBase";

import type { FunctionComponent } from "react";
import { useState } from "react";

/**
 * @interface
 * @augments BaseProps
 * @property [type] {"text" | "email" | "password"} The type of input tag to use.
 * @property [validation] {RegExp} The regex validation for the user input.
 *
 * @see {@link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>|MDN Docs}
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export interface InputTextProps extends InputProps<string> {
  type?: "text" | "email" | "password";
  validation?: RegExp;
}

/**
 * InputText Component
 * @component
 * @param name {string} The html name attribute for the input tag.
 * @param label {string} The text for the html label tag.
 * @param placeholder {string} The input placeholder.
 * @param [icon] {ReactElement} The icon to display inside the input field.
 * @param [disabled] {disabled} Whether the input tag is disabled or not.
 * @param [type="text"] {"text" | "email" | "password"} The type of input tag to use.
 * @param [validation] {RegExp} The regex validation for the user input.
 * @param [required=false] {boolean} If this field is required or not.
 *
 * @see {@link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>|MDN Docs}
 * @todo add some hover tooltip to explain why input might be invalid (new prop field)
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const InputText: FunctionComponent<InputTextProps> = ({ name, label, placeholder, icon, disabled, type = "text", validation, required = false, onChange }) => {
  const [state, setState] = useState<InputState<string>>(DEFAULT_INPUT_STATE_STRING);

  const innerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = {
      value: event.target.value,
      valid: validation?.test(event.target.value)
    };
    if (onChange) {
      onChange(newState.value, newState.valid);
    }
    setState(newState);
  };

  return (
    <InputWrapper label={label} icon={icon} required={required}>
      <input
        type={type}
        id={name}
        name={name}
        className={`input ${stateClassName(state.valid)} ${disabled ? "disabled" : ""}`}
        placeholder={placeholder}
        required={required}
        value={state.value}
        onChange={innerOnChange}
        aria-invalid={state.valid === false}
      />
    </InputWrapper>
  );
};

export default InputText;
