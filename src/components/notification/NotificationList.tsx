import BaseProps from "../../types";
import type { FunctionComponent } from "react";
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
 * @param [reversed=true] {boolean} Whether the order is reversed or not.
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotificationList: FunctionComponent<NotificationListProps> = ({ notifications, maxNotifications = 5, maxTime = 5000, reversed = true, style }) => {
  const items = notifications
    .slice(0, maxNotifications)
    .map((notificationProp, i) => {
      return <Notification {...notificationProp} key={i} />;
    });
  return (
    <List style={{ ...style, gap: 16 }} reversed={reversed}>
      {items}
    </List>
  );
};

export default NotificationList;
