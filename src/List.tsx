import { CSSProperties, FunctionComponent, ReactElement } from "react";

import BaseProps from "./utils/baseProps";

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
  return (
    <div style={combinedStyle}>
      {props.items}
    </div>
  );
};

List.defaultProps = {
  orientation: "vertical",
  reversed: false
};

export default List;
