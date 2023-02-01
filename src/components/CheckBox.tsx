import type { FunctionComponent, ReactNode } from "react";

import BaseProps from "../types";

interface CheckBoxProps extends BaseProps{
  children: ReactNode;
}

const CheckBox: FunctionComponent<CheckBoxProps> = (props) => {
  return (
    <label className={"checkbox"} style={props.style}>
      <input type="checkbox" />
      Remember me
    </label>
  );
};

export default CheckBox;