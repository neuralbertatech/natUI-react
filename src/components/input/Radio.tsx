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
 * @param disabled {boolean} Disable the radio button
 *
 * @author Yash Sunil Mouje <yash_mouje@hotmail.com>
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const Radio: RadioComponent = (props) => {
  const uniqueId = `${props.name}-${Math.round(Math.random() * 1000)}`;

  return <>
    <input className="radio" type="radio" name={props.name} id={uniqueId} disabled={props.disabled} />
    <label className="radio" htmlFor={uniqueId} style={props.style}>{props.children}</label>
  </>;
};

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
