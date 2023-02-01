import { fireEvent, render } from "@testing-library/react";

import { DateViewWidget } from "../src/components/DateViewWidget";

describe("Date View Widget", () => {
  const date = new Date(1970, 1);
  const rendered = render(
    <DateViewWidget date={date} data-test-id="widget" />
  );

  test("card date property", () => {
    fireEvent.mouseOver(rendered.getByText(/1970$/));
    expect(rendered.getByText(/1970 0/)).toHaveClass("is-block");
    fireEvent.mouseOut(rendered.getByText(/1970$/));
    expect(rendered.getByText(/1970 0/)).toHaveClass("is-hidden");
  });
});
