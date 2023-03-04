import BaseProps from "../../types";
import type { FunctionComponent } from "react";

interface BaseRadioProps extends BaseProps {
  children: string;
  disabled?: boolean;
  name: string;
}


export type RadioComponent = FunctionComponent<BaseRadioProps>
/**
 * Radio Button Component
 * @component
 * @param name {string} Link multiple radio buttons to the same name
 * @param [disabled=false] {boolean} Disable the radio button
 *
 * @author Yash Sunil Mouje <yash_mouje@hotmail.com>
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const Radio: RadioComponent = ({ name, disabled = false, children, style}) => {
  const uniqueId = `${name}-${Math.round(Math.random() * 1000)}`;

  return <>
    <input className="radio" type="radio" name={name} id={uniqueId} disabled={disabled} />
    <label className="radio" htmlFor={uniqueId} style={style}>{children}</label>
  </>;
};

export default Radio;
