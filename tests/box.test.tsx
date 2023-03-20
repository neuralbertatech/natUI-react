import { Box } from "../src";
import { render } from "@testing-library/react";

describe("Box Component", () => {
  test("box class property", () => {
    const rendered = render(
      <Box>Box 1</Box>
    );

    expect(rendered.getByText(/box/i)).toHaveClass("box");
  });

  test("no glass effect", () => {
    const rendered = render(
      <Box>Box 2</Box>
    );

    expect(rendered.getByText(/box/i)).not.toHaveClass("is-glass");
  });

  test("glass effect", () => {
    const rendered = render(
      <Box glass>Box 3</Box>
    );

    expect(rendered.getByText(/box/i)).toHaveClass("is-glass");
  });
});
