import type { CSSProperties, FunctionComponent, ReactElement } from "react";

import type BaseProps from "../types";

interface ListProps extends BaseProps {
  orientation?: "horizontal" | "vertical";
  reversed?: boolean;
  items: ReactElement[];
}

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

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
