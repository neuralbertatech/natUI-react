import { InputWrapper, stateClassName } from "./InputBase";

import type { FunctionComponent } from "react";
import type { InputProps } from "./InputBase";

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
 * @param state {Array<InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>>} The state for the input. Can be created with useState<InputState<?>>().
 * @param [icon] {ReactElement} The icon to display inside the input field.
 * @param [disabled] {disabled} Whether the input tag is disabled or not.
 * @param [type="text"] {"text" | "email" | "password"} The type of input tag to use.
 * @param [validation] {RegExp} The regex validation for the user input.
 *
 * @see {@link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>|MDN Docs}
 * @todo add some hover tooltip to explain why input might be invalid (new prop field)
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
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
        onChange={onChange}
        aria-invalid={state.valid === false}
      />
    </InputWrapper>
  );
};

InputText.defaultProps = { type: "text" };

export default InputText;
