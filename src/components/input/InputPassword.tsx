import type { FunctionComponent } from "react";
import InputText from "./InputText";
import type { InputTextProps } from "./InputText";

/**
 * @interface
 * @augments InputTextProps
 * @property validation {never}
 */
interface InputPasswordProps extends InputTextProps {
  validation?: never;
}
// min 8 chars, min 1 uppercase letter, min 1 lowercase letter, min 1 num, min 1 special char
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/**
 * InputPassword Component
 * @component
 * @param name {string} The html name attribute for the input tag.
 * @param label {string} The text for the html label tag.
 * @param placeholder {string} The input placeholder.
 * @param state {Array<InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>>} The state for the input. Can be created with useState<InputState<?>>().
 * @param [icon] {ReactElement} The icon to display inside the input field.
 * @param [disabled] {disabled} Whether the input tag is disabled or not.
 * @param [required=false] {boolean} If this field is required or not.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const InputPassword: FunctionComponent<InputPasswordProps> = (props) => {
  return <InputText type="password" {...props} validation={passwordRegex} />;
};

export default InputPassword;
