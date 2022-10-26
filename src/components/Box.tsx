import type { FunctionComponent, ReactNode } from "react";

import BaseProps from "../types";

/**
 * @interface
 * @property bg {string} The background colour for the box.
 * @property children {ReactNode} Prop children.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface BoxProps extends BaseProps {
  glass?: boolean;
  children: ReactNode
}

/**
 * Box Component
 * @component
 * @param bg {string} The background colour for the box.
 * @param children {ReactNode} Prop children.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const Box: FunctionComponent<BoxProps> = (props) => {
  const glassEfect = props.glass ? "is-glass" : "";
  return (
    <div className={`box ${glassEfect}`} style={props.style} >
      {props.children}
    </div>
  );
};

Box.defaultProps = {
  glass: false
};

export default Box;
