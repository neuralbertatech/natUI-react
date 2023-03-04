import type { FunctionComponent, PropsWithChildren } from "react";

export type CardBodyComponent = FunctionComponent<PropsWithChildren>;

/**
 * CardButtons Component
 * @component
 * @param title {string} The title to display on the card.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const CardBody: CardBodyComponent = ({ children }) =>
  <p className="content">{children}</p>;

export default CardBody;
