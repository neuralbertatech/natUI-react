import type { ChangeEvent, FunctionComponent } from "react";

import BaseProps from "../../types";

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
  children: string;
  name: string;
}

export type CheckBoxComponent = FunctionComponent<CheckboxProps>
/**
 * CheckBox component
 * @component
 * @parm id {string} id of the checkbox input 
 * @parm checked {boolean} if the checkbox is checked 
 * @parm onChange {event} onChange function handles change event
 * @author Frank(Ziang) Li <ziang6@ualberta.ca> 
 */
const Checkbox: CheckBoxComponent = ({children, isChecked = false, handleChange, name, style}) => {
  const uniqueId = `${name}-${Math.round(Math.random() * 1000)}`;
  return (
    <div>
      <input className="checkbox" type="checkbox" name={name} id={uniqueId} checked={isChecked} onChange={handleChange}/>
      <label className="checkbox" htmlFor={uniqueId} style={style}>{children}</label>
    </div> 

  );
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;


