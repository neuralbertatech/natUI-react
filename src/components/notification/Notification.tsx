import BaseProps from "../../types";
import { FunctionComponent } from "react";

export interface NotificationProps extends BaseProps {
  title: string;
  description: string;
  type?: "success" | "info" | "warning" | "error";
  onDismiss?: () => void;
}

const typeToClassname = (type: NotificationProps["type"]) => {
  switch (type) {
    case "success":
      return "is-success";
    case "info":
      return "is-info";
    case "warning":
      return "is-warning";
    case "error":
      return "is-danger";
    default:
      return "is-primary";
  }
};

const Notification: FunctionComponent<NotificationProps> = (props) => {
  return (
    <div className={`notification ${typeToClassname(props.type)} w-full`}>
      {props.onDismiss !== undefined && <button className="delete" onClick={props.onDismiss}></button>}
      <h3 className="title is-3">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Notification;
