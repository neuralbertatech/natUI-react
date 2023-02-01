import { Button } from "../src";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button (as button) Component", () => {
  let rendered: RenderResult;
  let onClickMock: jest.Mock;

  beforeEach(() => {
    onClickMock = jest.fn();
    rendered = render(
      <Button text="Button" onClick={onClickMock} />
    );
  });

  test("button tag", () => {
    expect(rendered.getByRole("button")).toBeInTheDocument();
  });

  test("onclick property", async () => {
    const button = rendered.getByRole("button");
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

describe("Button (as link) Component", () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <Button text="Button" href="/" />
    );
  });

  test("a tag", () => {
    expect(rendered.getByRole("link")).toBeInTheDocument();
  });

  test("href property", () => {
    expect(rendered.getByRole("link")).toHaveAttribute("href", "/");
  });
});

describe("Button CSS classes", () => {
  test("outlined", () => {
    const rendered = render(
      <Button text="Button" onClick={() => { }} />
    );
    const button = rendered.getByRole("button");
    expect(button).toHaveClass("button");
    expect(button).not.toHaveClass("is-outlined");
    expect(button).not.toHaveClass("is-loading");
  });

  test("outlined", () => {
    const rendered = render(
      <Button text="Button" onClick={() => { }} outlined />
    );
    const button = rendered.getByRole("button");
    expect(button).toHaveClass("is-outlined");
    expect(button).not.toHaveClass("is-loading");
  });

  test("loading", () => {
    const rendered = render(
      <Button text="Button" onClick={() => { }} loading />
    );
    const button = rendered.getByRole("button");
    expect(button).not.toHaveClass("is-outlined");
    expect(button).toHaveClass("is-loading");
  });

  test.each([
    ["success", "is-success"],
    ["info", "is-info"],
    ["warning", "is-warning"],
    ["error", "is-danger"]
  ])("colors %s", (type: string, cssClass: string) => {
    type ButtonType = "success" | "info" | "warning" | "error";
    const rendered = render(
      <Button text="Button" type={type as ButtonType} onClick={() => { }} />
    );
    const button = rendered.getByRole("button");
    expect(button).toHaveClass(cssClass);
  });
});
