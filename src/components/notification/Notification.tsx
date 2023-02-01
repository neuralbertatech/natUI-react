import BaseProps from "../../types";
import type { FunctionComponent } from "react";

/**
 * NotificationProps
 * @interface
 * @augments BaseProps
 * @property title {string} The title for the notification
 * @property description {string} The description for the notification
 * @property [type] {"success" | "info" | "warning" | "error"} The type of notification. Can be omitted for primary notification type.
 * @property [onDismiss] {Notification~onDismiss} Callback function to run when the user dismisses the notification.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export interface NotificationProps extends BaseProps {
  title: string;
  description: string;
  type?: "success" | "info" | "warning" | "error";
  onDismiss?: () => void;
}

/**
 * Get the css class name for a given notification type.
 * @param type {"success" | "info" | "warning" | "error" | undefined} notification type
 * @returns {"is-success" | "is-info" | "is-warning" | "is-danger" | "is-primary"} type of string
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const typeToClassName = (type: NotificationProps["type"]) => {
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

/**
 * Notification Component
 * @component
 * @property title {string} The title for the notification
 * @property description {string} The description for the notification
 * @property [type] {"success" | "info" | "warning" | "error"} The type of notification. Can be omitted for primary notification type.
 * @property [onDismiss] {Notification~onDismiss} Callback function to run when the user dismisses the notification.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const Notification: FunctionComponent<NotificationProps> = (props) => {
  return (
    <div className={`notification ${typeToClassName(props.type)} w-full`}>
      {props.onDismiss !== undefined && <button className="delete" onClick={props.onDismiss}></button>}
      <h3 className="title is-3">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Notification;
/**
 * Callback for onDismiss event
 * @callback onDissmiss
 * @return {void}
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
