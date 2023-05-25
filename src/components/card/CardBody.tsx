import type { FunctionComponent, PropsWithChildren } from "react";

export type CardBodyComponent = FunctionComponent<PropsWithChildren>;

/**
 * CardButtons Component
 * @component
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const CardBody: CardBodyComponent = ({ children }) =>
  <>{children}</>;

export default CardBody;
