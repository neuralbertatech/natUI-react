import type { FunctionComponent, ReactElement } from "react";

import BaseProps from "../../types";
import Box from "../Box";
import type { CardBodyComponent } from "./CardBody";
import type { CardButtonGroupComponent } from "./CardButton";
import { DateViewWidget } from "../DateViewWidget";

/**
 * @interface
 * @implements BaseProps
 * @property title {string} The title to display on the card.
 * @property subtitle {string} The subtitle to display on the card.
 * @property [date] {Date} Display a date for the card.
 * @property [glass=false] {boolean} The background colour for the card.
 * @property children {ReactElement}
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface CardProps extends BaseProps {
  title: string;
  subtitle: string;
  date?: Date;
  glass?: boolean;
  children: [ReactElement<CardBodyComponent>, ReactElement<CardButtonGroupComponent>];
}

/**
 * Card Component
 * @component
 * @param title {string} The title to display on the card.
 * @param subtitle {string} The subtitle to display on the card.
 * @param [date] {Date} Display a date for the card.
 * @param [glass=false] {boolean} The background colour for the card.
 * @param children {ReactElement}
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const Card: FunctionComponent<CardProps> = ({ title, subtitle, date, glass = false, style, children }) => {
  return <Box style={style} glass={glass}>
    <div className="columns is-gapless">
      <div className="column is-flex-grow-2">
        <h2 className="title is-2">{title}</h2>
        <h3 className="subtitle is-3">{subtitle}</h3>
      </div>
      <div className="column has-text-right">
        <span >{date !== undefined && <DateViewWidget date={date} />}</span>
      </div>
    </div>
    {children}
  </Box>;
};

export default Card;
