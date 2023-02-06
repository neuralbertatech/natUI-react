import type { ChangeEvent, FunctionComponent } from "react";

import BaseProps from "../types";

interface CheckboxProps extends BaseProps{
  isChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  lable: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {


  return (
    <div style={{margin:"5px"}}>
      <label >
        {props.lable}
        <input type="checkbox"  id={props.lable} checked={props.isChecked} onChange={props.handleChange} style={{marginLeft:"2px"}} />
      </label>
    </div> 

  );
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;


