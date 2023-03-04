import type { FunctionComponent, ReactElement } from "react";

import BaseProps from "../../types";
import List from "../List";

type ButtonComponent = ReactElement<ButtonComponent>;

/**
 * @interface
 * @implements CardButtonProps
 * @property [orientation="horizontal"] {"horizontal" | "vertical"} The orientation for the buttons.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface CardButtonsProps extends BaseProps {
  orientation?: "horizontal" | "vertical";
  children: ButtonComponent | ButtonComponent[];
}

export type CardButtonGroupComponent = FunctionComponent<CardButtonsProps>

/**
 * CardButtons Component
 * @component
 * @param [orientation="horizontal"] {"horizontal" | "vertical"} The orientation for the buttons.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const CardButtons: CardButtonGroupComponent = ({ orientation = "vertical", children }) => {
  return Array.isArray(children)
    ? <List orientation={orientation}>
      {children}
    </List>
    : <>{children}</>;
};

export default CardButtons;
