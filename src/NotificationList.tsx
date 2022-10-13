import Notification, { NotificationProps } from "./Notification";

import BaseProps from "./baseProps";
import { FunctionComponent } from "react";
import List from "./List";

interface NotificationListProps extends BaseProps {
  notifications: NotificationProps[];
  maxNotifications?: number;
  maxTime?: number; // in milliseconds
  reversed?: boolean;
}

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
