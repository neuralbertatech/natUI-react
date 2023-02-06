import type { ChangeEvent, FunctionComponent } from "react";

import BaseProps from "../types";

/**
 * @interface
 * @property isChecked {boolean} wheather the box is checked 
 * @property lable {string} the lable of the checkbox 
 *
 * @author Frank(Ziang) Li <ziang6@ualberta.ca> 
 */
interface CheckboxProps extends BaseProps{
  isChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  lable: string;
}

/**
 * CheckBox component
 * @component
 * @parm id {string} id of the checkbox input 
 * @parm checked {boolean} if the checkbox is checked 
 * @parm onChange {event} onChange function handles change event
 * @author Frank(Ziang) Li <ziang6@ualberta.ca> 
 */
const Checkbox: FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {
  return (
    <div style={{margin:"5px"}}>
      <label >
        {props.lable}
        <input type="checkbox"  id={props.lable} checked={props.isChecked} onChange={props.handleChange} style={{marginLeft:"5px"}} />
      </label>
    </div> 

  );
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;


