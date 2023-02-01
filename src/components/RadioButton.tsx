import BaseProps from "../types";
import type { FunctionComponent } from "react";

interface BaseRadioProps extends BaseProps {
  text: string;
  disabled?: boolean;
  name: string;
}


export type RadioComponent = FunctionComponent<BaseRadioProps>
/**
 * Radio Button Component
 * @component
 * @param text {string} The text to display beside the button
 * @param name {string} To Link Multiple Radio Buttons to the same ID 
 * 
 * @author Yash Sunil Mouje <yash_mouje@hotmail.com>
 */
const Radio: RadioComponent = (props) => {
  const commonProps = {
    text: props.text,
    name: props.name,
    disabled: props.disabled,
    style: props.style,
  };

  const innerDOM = (<>
    {props.text}
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
