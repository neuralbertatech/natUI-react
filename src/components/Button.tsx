import { FunctionComponent, MouseEventHandler, ReactElement } from "react";

import BaseProps from "../types";

/**
 * @interface
 * @implements BaseProps
 * @property text {string} The text to display on the button.
 * @property [icon] {ReactElement} The icon to display on the button.
 * @property [type] {"success" | "info" | "warning" | "error"} The type (in terms of style) of button.
 * @property [outlined=false] {boolean} Whether the button is outlined or filled in. Filled in by default.
 * @property [disabled=false] {boolean} Whether to disable the button.
 * @property [loading=false] {boolean} Whether to show a loading state for the button.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface BaseButtonProps extends BaseProps {
  text: string;
  icon?: ReactElement;
  type?: "success" | "info" | "warning" | "error";
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

/**
 * @interface
 * @implements BaseButtonProps
 * @property onClick {MouseEventHandler<HTMLButtonElement>} The handler function gets called when the user clicks on the button.
 * @property href {never}
 * @see {@link <https://www.npmjs.com/package/@types/react>|@types/react}
 *
 * @author Giancarlo Pernudi Segura <gino@neuroalberta.tech>
 */
interface ButtonFunctionProps extends BaseButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  href?: never;
}

/**
 * @interface
 * @implements BaseButtonProps
 * @property href {string} Link that the button will redirect to when clicked.
 * @property onClick {never}
 *
 * @author Giancarlo Pernudi Segura <gino@neuroalberta.tech>
 */
interface ButtonLinkProps extends BaseButtonProps {
  href: string;
  onClick?: never;
}

/** @ignore */
export type ButtonProps = ButtonFunctionProps | ButtonLinkProps;

/**
 * @hide
 * Get the css class name for a given notification type.
 * @param type {"success" | "info" | "warning" | "error" | undefined} notification type
 * @returns {"is-success" | "is-info" | "is-warning" | "is-danger" | "is-primary"} type of string
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const typeToClassName = (type: ButtonProps["type"]) => {
  switch (type) {
    case "success":
      return "is-success";
    case "info":
      return "is-info";
    case "warning":
      return "is-warning";
    case "error":
      return "is-danger";
    default:
      return "is-primary";
  }
};

/**
 * @component
 * @param text {string} The text to display on the button.
 * @param onClick {MouseEventHandler<HTMLButtonElement>} The handler function gets called when the user clicks on the button. Cannot be used if href is defined.
 * @param href {string} Link that the button will redirect to when clicked. Cannot be used if onClick is defined.
 * @param [icon] {ReactElement} The icon to display on the button.
 * @param [type] {"success" | "info" | "warning" | "error"} The type (in terms of style) of button.
 * @param [outlined=false] {boolean} Whether the button is outlined or filled in. Filled in by default.
 * @param [disabled=false] {boolean} Whether to disable the button.
 * @param [loading=false] {boolean} Whether to show a loading state for the button.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const Button: FunctionComponent<ButtonProps> = (props) => {
  const commonProps = {
    className: `button
          ${typeToClassName(props.type)}
          ${props.outlined ? "is-outlined" : ""}
          ${props.loading ? "is-loading" : ""}`,
    disabled: props.disabled,
  };
  const innerDOM = (<>
    {props.icon && <span className="icon">{props.icon}</span>}
    <span>{props.text}</span>
  </>);
  return (props.onClick) ?
    (
      <button {...commonProps} onClick={props.onClick}>
        {innerDOM}
      </button>
    ) :
    (
      <a {...commonProps} href={props.href}>
        {innerDOM}
      </a>
    );
};

Button.defaultProps = {
  outlined: false,
  disabled: false,
  loading: false
};

export default Button;
