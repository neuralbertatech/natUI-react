import type { FunctionComponent } from "react";
import { useState } from "react";

interface DateViewWidgetProps {
  date: Date;
}

export const DateViewWidget: FunctionComponent<DateViewWidgetProps> = ({ date }) => {
  const shortDate = date.toLocaleDateString();
  const longDate = date.toString();
  const [hovering, setHovering] = useState(false);
  return <span
    style={{ position: "relative" }}
    onMouseOver={() => setHovering(true) }
    onMouseOut={() => setHovering(false) }
  >
    <div
      className={`pointer ${hovering ? "is-block" : "is-hidden"}`}
      style={{
        backgroundColor: "black",
        paddingInline: 1,
        paddingBlock: 2,
        color: "white",
        width: "max-content",
        position: "absolute",
        right: -16,
        top: -8,
        borderRadius: 4,
        paddingBlockEnd: 8,
        paddingBlockStart: 8,
        paddingInlineEnd: 16,
        paddingInlineStart: 16,
      }}
    >
      {longDate}
    </div>
    {shortDate}
  </span>;
};
