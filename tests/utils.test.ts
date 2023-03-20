import { NotificationStore } from "../src/utils";

describe("Notification Store", () => {
  const notification = {
    title: "Notification test",
    description: "This notification is a test"
  };

  test("singleton property", () => {
    expect(NotificationStore.getNotifications()).toEqual([]);
  });

  test("add a notification", () => {
    NotificationStore.addNotification(notification);
    expect(NotificationStore.getNotifications().length).toBe(1);
    expect(NotificationStore.getNotifications()[0]).toEqual(notification);
  });

  test("remove a notification", () => {
    expect(NotificationStore.removeNotification(0)).toEqual(notification);
    expect(() => NotificationStore.removeNotification(0)).toThrow(/^Notification does not exist at index \d+$/);
  });
});
