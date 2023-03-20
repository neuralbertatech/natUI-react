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
const CardButtons: CardButtonGroupComponent = (props) => {
  return Array.isArray(props.children)
    ? <List orientation={props.orientation}>
      {props.children}
    </List>
    : <>{props.children}</>;
};

CardButtons.defaultProps = {
  orientation: "vertical"
};

export default CardButtons;
