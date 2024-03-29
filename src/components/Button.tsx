import type { FunctionComponent, MouseEventHandler, ReactElement } from "react";

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
 * Get the css class name for a given button style type.
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

export type ButtonComponent = FunctionComponent<ButtonProps>

/**
 * Button Component
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
const Button: ButtonComponent = ({ text, onClick, href, icon, type, outlined = false, disabled = false, loading = false, style}) => {
  const commonProps = {
    style,
    className: `button
          ${typeToClassName(type)}
          ${outlined ? "is-outlined" : ""}
          ${loading ? "is-loading" : ""}`,
    disabled: disabled,
  };
  const innerDOM = (<>
    {icon && <span className="icon">{icon}</span>}
    <span>{text}</span>
  </>);
  return (onClick) ?
    (
      <button {...commonProps} onClick={onClick}>
        {innerDOM}
      </button>
    ) :
    (
      <a {...commonProps} href={href}>
        {innerDOM}
      </a>
    );
};

export default Button;
