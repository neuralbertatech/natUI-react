import { FunctionComponent, ReactElement, ReactNode } from "react";

export interface InputProps<T> {
  placeholder: string;
  state: [InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>];
  icon?: ReactElement;
  disabled?: boolean;
}

interface InputWrapperProps {
  icon?: ReactElement;
  children: ReactNode;
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
    return (
    <div className={`control ${props.icon && "has-icons-left"}`}>
      {props.children}
      <span className="icon is-small is-left">
        {props.icon}
      </span>
    </div>
  );
}
