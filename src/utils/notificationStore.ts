import { NotificationProps } from "../Notification";

export default class NotificationStore {
  private static notifications: NotificationProps[] = [];

  private constructor() { }
  
  public static addNotification(notification: NotificationProps) {
    NotificationStore.notifications.push(notification);
  }

  public static removeNotification(index: number) {
    console.debug("Removing notification at index", index);
    NotificationStore.notifications.splice(index);
  }

  public static getNotifications() {
    return NotificationStore.notifications;
  }
}
