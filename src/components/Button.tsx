import { FunctionComponent, MouseEventHandler, ReactElement } from "react";

import BaseProps from "../types";

interface BaseButtonProps extends BaseProps {
  text: string;
  icon?: ReactElement;
  type?: "success" | "info" | "warning" | "error";
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

interface ButtonFunctionProps extends BaseButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  href?: never;
}

interface ButtonLinkProps extends BaseButtonProps {
  href: string;
  onClick?: never;
}

export type ButtonProps = ButtonFunctionProps | ButtonLinkProps;

const typeToClassname = (type: ButtonProps["type"]) => {
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

const Button: FunctionComponent<ButtonProps> = (props) => {
  const commonProps = {
    className: `button
          ${typeToClassname(props.type)}
          ${props.outlined && "is-outlined"}
          ${props.loading && "is-loading"}`,
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

export default Button;
