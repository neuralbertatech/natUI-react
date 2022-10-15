import { describe, expect, test } from "@jest/globals";

import { NotificationStore } from "../src/utils";

describe("Notification Store", () => {
  const notification = {
    title: "Notification test",
    description: "This notification is a test"
  };

  test("singleton property", () => {
    expect(NotificationStore.getNotifications()).toBe(NotificationStore.getNotifications());
  });

  test("add a notification", () => {
    NotificationStore.addNotification(notification);
    expect(NotificationStore.getNotifications().length).toBe(1);
    expect(NotificationStore.getNotifications()[0]).toBe(notification);
  });

  test("remove a notification", () => {
    expect(NotificationStore.removeNotification(0)).toBe(notification);
    expect(() => NotificationStore.removeNotification(0)).toThrow(/^Notification does not exist at index \d+$/);
  });
});
