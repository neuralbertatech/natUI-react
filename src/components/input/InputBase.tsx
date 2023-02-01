import type { FunctionComponent, ReactElement } from "react";

type primitive = string | number | boolean;

/**
 * @interface
 * @template T
 * @property name {string} The html name attribute for the input tag.
 * @property label {string} The text for the html label tag.
 * @property placeholder {string} The input placeholder.
 * @property state {Array<InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>>} The state for the input. Can be created with useState<InputState<?>>().
 * @property [icon] {ReactElement} The icon to display inside the input field.
 * @property [disabled] {disabled} Whether the input tag is disabled or not.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export interface InputProps<T> {
  name: string;
  label: string;
  placeholder: string;
  state: [InputState<T>, (value: InputState<T>) => any];
  icon?: ReactElement;
  disabled?: boolean;
}

/**
 * @interface
 * @property label {string} The text for the html label tag.
 * @property children {ReactElement<FunctionComponent<InputProps<primitive>>>} Component which takes {@link InputProps} for arguments.
 * @property [icon] {ReactElement} The icon to display inside the input field.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface InputWrapperProps {
  label: string;
  children: ReactElement<FunctionComponent<InputProps<primitive>>>;
  icon?: ReactElement;
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

const hasIconLeft = (icon: InputWrapperProps["icon"]) =>
  icon === undefined ? "" : "has-icons-left";

/**
 * Input Wrapper Component
 * @param name {string} The html name attribute for the input tag.
 * @param label {string} The text for the html label tag.
 * @param placeholder {string} The input placeholder.
 * @param state {Array<InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>>} The state for the input. Can be created with useState<InputState<?>>().
 * @param [icon] {ReactElement} The icon to display inside the input field.
 * @param [disabled] {disabled} Whether the input tag is disabled or not.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export const InputWrapper: FunctionComponent<InputWrapperProps> = (props) => {
  const { name } = props.children.props;
  return (
    <>
      <label htmlFor={name}>{props.label}</label>
      <p className={`control ${hasIconLeft(props.icon)}`}>
        {props.children}
        {props.icon && <span className="icon is-left">
          {props.icon}
        </span>}
      </p>
    </>
  );
};
