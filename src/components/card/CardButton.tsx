import type { FunctionComponent, ReactElement } from "react";

import BaseProps from "../../types";
import type { ButtonComponent } from "../Button";
import List from "../List";

/**
 * @interface
 * @implements CardButtonProps
 * @property orientation {"horizontal" | "vertical"} The orientation for the buttons.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface CardButtonsProps extends BaseProps {
  orientation: "horizontal" | "vertical";
  children: ReactElement<ButtonComponent>[];
}

export type CardButtonGroupComponent = FunctionComponent<CardButtonsProps>

/**
 * CardButtons Component
 * @component
 * @param orientation {"horizontal" | "vertical"} The orientation for the buttons.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const CardButtons: CardButtonGroupComponent = (props) => {
  return <List orientation={props.orientation}>
    {props.children}
  </List>;
};

CardButtons.defaultProps = {
  orientation: "vertical"
};

export default CardButtons;
