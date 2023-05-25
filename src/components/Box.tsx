import type { FunctionComponent, ReactNode } from "react";

import BaseProps from "../types";

/**
 * @interface
 * @property [glass=false] {boolean} The background colour for the box.
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
 * @param [glass=false] {boolean} The background colour for the box.
 * @param children {ReactNode} Prop children.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const Box: FunctionComponent<BoxProps> = ({ glass = false, children, style }) => {
  const glassEfect = glass ? "is-glass" : "";
  return (
    <div className={`box ${glassEfect}`} style={style} >
      {children}
    </div>
  );
};

export default Box;
