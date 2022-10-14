import { FunctionComponent, ReactElement, ReactNode } from "react";

type primitive = string | number | boolean;

export interface InputProps<T> {
  name: string;
  label: string;
  placeholder: string;
  state: [InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>];
  icon?: ReactElement;
  disabled?: boolean;
}

interface InputWrapperProps {
  label: string;
  children: ReactElement<FunctionComponent<InputProps<primitive>>>;
  icon?: ReactElement;
}

export interface InputState<T> {
  value: T;
  valid?: boolean;
}

export const DEFAULT_INPUT_STATE_STRING: InputState<string> = {
  value: ""
}

export const DEFAULT_INPUT_STATE_NUMBER: InputState<number> = {
  value: 0
}

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

export const InputWrapper: FunctionComponent<InputWrapperProps> = (props) => {
  const { name } = props.children.props;
  return (
    <>
      <label htmlFor={name}>{props.label}</label>
      <div className={`control ${props.icon && "has-icons-left"}`}>
        {props.children}
        <span className="icon is-small is-left">
          {props.icon}
        </span>
      </div>
    </>
  );
}
