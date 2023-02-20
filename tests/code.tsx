import { CodeBox } from "../src";
import { render } from "@testing-library/react";

describe("CodeBox Component", () => {
  test("code class property", () => {
    const rendered = render(
      <CodeBox code="int main() {return 0;}" language="c" icon={<span>[c]</span>} />
    );

    expect(rendered.getByText(/code/i)).toHaveClass("code");
  });
});
