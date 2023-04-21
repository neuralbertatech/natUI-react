import type { FunctionComponent, ReactElement } from "react";

/**
 * @callback onChangeCallback
 * @template T
 * @param value {T} Input value
 * @param [valid] {boolean} Whether the input is valid according to the regex.
 */

/**
 * @interface
 * @template T
 * @property name {string} The html name attribute for the input tag.
 * @property label {string} The text for the html label tag.
 * @property placeholder {string} The input placeholder.
 * @property state {Array<InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>>} The state for the input. Can be created with useState<InputState<?>>().
 * @property [icon] {ReactElement} The icon to display inside the input field.
 * @property [disabled] {disabled} Whether the input tag is disabled or not.
 * @property [onChange] {onChangeCallback} Listener that gets triggered when the value changes.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export interface InputProps<T> {
  name: string;
  label: string;
  placeholder: string;
  icon?: ReactElement;
  disabled?: boolean;
  required?: boolean;
  onChange?: (value: T, validation?: boolean) => void;
}

/**
 * @interface
 * @template T
 * @property label {string} The text for the html label tag.
 * @property children {ReactElement<FunctionComponent<InputProps>>} Component which takes {@link InputProps} for arguments.
 * @property [icon] {ReactElement} The icon to display inside the input field.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface InputWrapperProps<T> {
  label: string;
  children: ReactElement<FunctionComponent<InputProps<T>>>;
  icon?: ReactElement;
  required?: boolean;
}

/**
 * @interface
 * @template T
 * @property value {T} The value of the input.
 * @property valid {boolean} The validation state of the input.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export interface InputState<T> {
  value: T;
  valid?: boolean;
}

/**
 * @constant
 * @type {InputState<string>}
 */
export const DEFAULT_INPUT_STATE_STRING: InputState<string> = {
  value: ""
};

/**
 * @constant
 * @type {InputState<number>}
 */
export const DEFAULT_INPUT_STATE_NUMBER: InputState<number> = {
  value: 0
};

/**
 * @hide
 * Get the css class name for a state.
 * @param type {"success" | "info" | "warning" | "error" | undefined} notification type
 * @returns {"is-success" | "is-info" | "is-warning" | "is-danger" | "is-primary"} type of string
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export const stateClassName = (state: boolean | undefined) => {
  switch (state) {
    case true:
      return "is-success";
    case false:
      return "is-danger";
    default:
      return "";
  }
};

const hasIconLeft = (icon: InputWrapperProps<unknown>["icon"]) =>
  icon === undefined ? "" : "has-icons-left";

/**
 * Input Wrapper Component
 * @template T
 * @param name {string} The html name attribute for the input tag.
 * @param label {string} The text for the html label tag.
 * @param placeholder {string} The input placeholder.
 * @param state {Array<InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>>} The state for the input. Can be created with useState<InputState<?>>().
 * @param [icon] {ReactElement} The icon to display inside the input field.
 * @param [disabled] {boolean} Whether the input tag is disabled or not.
 * @param [required=false] {boolean} Append an asterix to the label to show the required status of the field if set to true.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export const InputWrapper: FunctionComponent<InputWrapperProps<unknown>> = ({children, label, icon, required = false }) => {
  const { name } = children.props;
  return (
    <>
      <label htmlFor={name}>{label}
        {required && <span style={{ userSelect: "none" }} className="has-text-danger"> *</span>}
      </label>
      <p className={`control ${hasIconLeft(icon)}`}>
        {children}
        {icon && <span className="icon is-left">
          {icon}
        </span>}
      </p>
    </>
  );
};
