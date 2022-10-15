import { NotificationProps } from "../components/notification/Notification";

export default class NotificationStore {
  private static notifications: NotificationProps[] = [];

  private constructor() { }

  public static addNotification(notification: NotificationProps) {
    NotificationStore.notifications.push(notification);
  }

  public static removeNotification(index: number) {
    if (index >= NotificationStore.notifications.length || index < 0) {
      throw new Error(`Notification does not exist at index ${index}`);
    }
    return NotificationStore.notifications.splice(index, 1)[0];
  }

  public static getNotifications() {
    return NotificationStore.notifications;
  }
}
