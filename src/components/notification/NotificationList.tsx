import BaseProps from "../../types";
import { FunctionComponent } from "react";
import List from "../List";
import Notification from "./Notification";
import type { NotificationProps } from "./Notification";

/**
 * @interface
 * @implements BaseProps
 * @property notifications {NotificationProps[]} The notifications to display.
 * @property [maxNotifications=5] {numbe} Maximum amount of notification to display at once. Will display the first n notifications.
 * @property [maxTime=5000] {number} The maximum amount of time a notification should be on screen for.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
interface NotificationListProps extends BaseProps {
  notifications: NotificationProps[];
  maxNotifications?: number;
  maxTime?: number;
  reversed?: boolean;
}

/**
 * @component
 * @param notifications {NotificationProps[]} The notifications to display.
 * @param [maxNotifications=5] {numbe} Maximum amount of notification to display at once. Will display the first n notifications.
 * @param [maxTime=5000] {number} The maximum amount of time a notification should be on screen for.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
const NotificationList: FunctionComponent<NotificationListProps> = (props) => {
  const items = props.notifications
    .slice(0, props.maxNotifications)
    .map((notificationProp, i) => {
      return <Notification {...notificationProp} key={i} />;
    });
  return (
    <List style={props.style} items={items} reversed={props.reversed} />
  );
};

NotificationList.defaultProps = {
  maxNotifications: 5,
  maxTime: 5000,
  reversed: false
};

export default NotificationList;
