import type { NotificationProps } from "../components/notification/Notification";

/**
 * Global store of notifications using the singleton pattern
 * @class NotificationStore
 * @hideconstructor
 *
 * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
 */
export default class NotificationStore {
  private static notifications: NotificationProps[] = [];

  /** @private */
  private constructor() { }

  /**
   * Add a notification to the store
   * @param notification {NotificationProps}
   *
   * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
   */
  public static addNotification(notification: NotificationProps) {
    NotificationStore.notifications.push(notification);
  }

  /**
   * Remove a notification given its index
   * @param index {number} notification index
   * @returns {NotificationProps} the notificaion that was removed from the store
   *
   * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
   */
  public static removeNotification(index: number) {
    if (!Number.isInteger(index) || index >= NotificationStore.notifications.length || index < 0) {
      throw new Error(`Notification does not exist at index ${index}`);
    }
    return NotificationStore.notifications.splice(index, 1)[0];
  }

  /**
   * Get all notifications.
   * @returns {NotificationProps[]} array of notifications
   *
   * @author Giancarlo Pernudi Segura <gino@neuralberta.tech>
   */
  public static getNotifications() {
    return NotificationStore.notifications;
  }
}
