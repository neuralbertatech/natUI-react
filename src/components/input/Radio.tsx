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
 * @param name {string} To Link Multiple Radio Buttons to the same ID 
 * 
 * @author Yash Sunil Mouje <yash_mouje@hotmail.com>
 */
const Radio: RadioComponent = (props) => {
  const commonProps = {
    name: props.name,
    disabled: props.disabled,
    style: props.style,
  };

  const innerDOM = (<>
    {props.children}
  </>);
  return (props.disabled) ?
    (
      <label {...commonProps}>
        <input type="radio" name={props.name} disabled />
        {innerDOM}
      </label>
    ) :

    (
      <label {...commonProps}>
        <input type="radio" name={props.name} />
        {innerDOM}
      </label>
    );
};

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
