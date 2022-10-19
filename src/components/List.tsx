/**
 * @module @neuralbertatech/ui-react
 */
import type { CSSProperties, FunctionComponent, ReactElement } from "react";

import type BaseProps from "../types";

/**
 * @interface
 * @property items {ReactElement[]} The items to put in the list.
 * @property [orientation] {"horizontal" | "vertical"} Whether to have a horizontal or vertical list.
 * @property [reversed] {boolean} If the input to the list should be reversed.
 */
interface ListProps extends BaseProps {
  items: ReactElement[];
  orientation?: "horizontal" | "vertical";
  reversed?: boolean;
}

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

/**
 * List Component
 * @component
 * @param items {ReactElement[]} The items to put in the list.
 * @param [orientation] {"horizontal" | "vertical"} Whether to have a horizontal or vertical list.
 * @param [reversed] {boolean} If the input to the list should be reversed.
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const List: FunctionComponent<ListProps> = (props) => {
  const direction = (props.orientation === "horizontal" ? "row" : "column")
    + (props.reversed ? "-reverse" : "") as FlexDirection;
  const combinedStyle: CSSProperties = {
    ...{
      display: "flex",
      flexDirection: direction,
      alignItems: "center"
    },
    ...props.style
  };
  const items = props.items.map((item, i) => (
    <li key={i}>
      {item}
    </li>
  ));
  return (
    <div role="list" style={combinedStyle}>
      {items}
    </div>
  );
};

List.defaultProps = {
  orientation: "vertical",
  reversed: false
};

export default List;
