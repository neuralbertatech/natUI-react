import { Notification, NotificationList } from "../src";

import { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Notification Component", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <Notification title="Notification" description="lorem ipsum" />
    );
  });

  test("notification has correct title", () => {
    expect(rendered.getByText("Notification")).toBeInTheDocument();
  });

  test("notification has correct description", () => {
    expect(rendered.getByText(/lorem/i)).toBeInTheDocument();
  });

  type NotificationTestCase = [
    "success" | "info" | "warning" | "error" | undefined,
    "is-success" | "is-danger" | "is-info" | "is-warning" | "is-primary"
  ];
  const notificationColorTestCases: NotificationTestCase[] = [
    [undefined, "is-primary"],
    ["success", "is-success"],
    ["info", "is-info"],
    ["warning", "is-warning"],
    ["error", "is-danger"]
  ];

  test.each(notificationColorTestCases)("notification colors {type: %s, class: %s}", (notificationType, notificationClassName) => {
    const { getByText } = render(
      <Notification title="new color just dropped" description="lorem ipsum" type={notificationType} />
    );
    expect(getByText(/new color/i).parentElement).toHaveClass(notificationClassName);
  });
});

describe("NotificationList Component", () => {
  test.each([1, 2, 3, 4, 5, 6])("display %d notifications", (maxDisplay) => {
    const notifications = [
      { title: "Notification 1", description: "lorem ipsum" },
      { title: "Notification 2", description: "lorem ipsum" },
      { title: "Notification 3", description: "lorem ipsum" },
      { title: "Notification 4", description: "lorem ipsum" },
      { title: "Notification 5", description: "lorem ipsum" },
      { title: "Notification 6", description: "lorem ipsum" },
    ];
    const rendered = render(
      <NotificationList notifications={notifications} maxNotifications={maxDisplay} />
    );
    expect(rendered.getAllByText(/notification \d+/i).length).toBe(maxDisplay);
  });
});
