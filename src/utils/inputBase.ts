import { ReactElement } from "react";

export interface InputProps<T> {
  placeholder: string;
  state: [InputState<T>, React.Dispatch<React.SetStateAction<InputState<T>>>];
  icon?: ReactElement;
  disabled?: boolean;
}

export interface InputState<T> {
  value: T;
  valid?: boolean;
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
