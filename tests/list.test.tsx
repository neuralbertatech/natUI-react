import { Button, List } from "../src";

import { render } from "@testing-library/react";

describe("List Component", () => {
  const items = [1, 2, 3, 4].map(i =>
    <Button text={`Button ${i}`} href={`/link${i}`} key={i} />);

  type FlexDirectionTestCase = [["horizontal" | "vertical", boolean], string];
  const flexDirectionTestCases: FlexDirectionTestCase[] = [
    [["horizontal", false], "row"],
    [["horizontal", true], "row-reverse"],
    [["vertical", false], "column"],
    [["vertical", true], "column-reverse"],
  ];

  test.each(flexDirectionTestCases)("flex direction [%s, %s]", ([orientation, reversed], flexDirection) => {
    const rendered = render(
      <List orientation={orientation} reversed={reversed}>
        {items}
      </List>
    );

    expect(rendered.getByRole("list")).toBeInTheDocument();
    expect(rendered.getByRole("list")).toHaveStyle({
      display: "flex",
      "flex-direction": flexDirection
    });
  });
});
