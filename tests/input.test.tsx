import { InputEmail, InputNumber, InputPassword, InputText } from "../src";

import type { InputState } from "../src/components/input/InputBase";
import { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { stateClassName } from "../src/components/input/InputBase";
import { useState as useStateMock } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Text Input Component", () => {
  const setState = jest.fn();
  let rendered: RenderResult;
  let state: [
    InputState<string>,
    React.Dispatch<React.SetStateAction<InputState<string>>>
  ];

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
    state = useStateMock({ value: "" });
    rendered = render(
      <InputText name="name" label="Name" placeholder="name" state={state} validation={/\w\d\w/} data-testid="name" />
    );
  });

  test("correct input type", () => {
    expect(rendered.getByPlaceholderText("name")).toBeInTheDocument();
    expect(rendered.getByPlaceholderText("name")).toHaveAttribute("type", "text");
  });

  test.todo("input validation (valid)");

  test.todo("input validation (invalid)");
});

describe("Email Input Component", () => {
  const setState = jest.fn();
  let rendered: RenderResult;
  let state: [
    InputState<string>,
    React.Dispatch<React.SetStateAction<InputState<string>>>
  ];

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
    state = useStateMock({ value: "" });
    rendered = render(
      <InputEmail name="email" label="Email" placeholder="email" state={state} />
    );
  });

  test("correct input type", () => {
    expect(rendered.getByPlaceholderText("email")).toBeInTheDocument();
    expect(rendered.getByPlaceholderText("email")).toHaveAttribute("type", "email");
  });
});

describe("Password Input Component", () => {
  const setState = jest.fn();
  let rendered: RenderResult;
  let state: [
    InputState<string>,
    React.Dispatch<React.SetStateAction<InputState<string>>>
  ];

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
    state = useStateMock({ value: "" });
    rendered = render(
      <InputPassword name="password" label="Password" placeholder="password" state={state} />
    );
  });

  test("correct input type", () => {
    expect(rendered.getByPlaceholderText("password")).toBeInTheDocument();
    expect(rendered.getByPlaceholderText("password")).toHaveAttribute("type", "password");
  });
});

describe("Password Input Component", () => {
  const setState = jest.fn();
  let rendered: RenderResult;
  let state: [
    InputState<number>,
    React.Dispatch<React.SetStateAction<InputState<number>>>
  ];

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setState]);
    state = useStateMock({ value: 0 });
    rendered = render(
      <InputNumber name="number" label="Number" placeholder="number" state={state} />
    );
  });

  test("correct input type", () => {
    expect(rendered.getByPlaceholderText("number")).toBeInTheDocument();
    expect(rendered.getByPlaceholderText("number")).toHaveAttribute("type", "number");
  });
});


describe("Input Base", () => {
  test.each([
    [true, "is-success"],
    [false, "is-danger"],
    [undefined, ""]
  ])("setClassName(%s) == %s", (state, className) => {
    expect(stateClassName(state)).toBe(className);
  });
});
