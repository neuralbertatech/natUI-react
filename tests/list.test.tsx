import { Button, List } from "../src";
import { render, screen } from "@testing-library/react";

describe("List Component", () => {
  const items = [
    <Button text="Button 1" href="/link1" />,
    <Button text="Button 2" href="/link2" />,
    <Button text="Button 3" href="/link3" />,
    <Button text="Button 4" href="/link4" />
  ];

  type FlexDirectionTestCase = [["horizontal" | "vertical", boolean], string];
  const flexDirectionTestCases: FlexDirectionTestCase[] = [
    [["horizontal", false], "row"],
    [["horizontal", true], "row-reverse"],
    [["vertical", false], "column"],
    [["vertical", true], "column-reverse"],
  ];

  test.each(flexDirectionTestCases)("flex direction [%s, %s]", ([orientation, reversed], flexDirection) => {
    const rendered = render(
      <List items={items} orientation={orientation} reversed={reversed} />
    );

    expect(rendered.getByRole("list")).toBeInTheDocument();
    expect(rendered.getByRole("list")).toHaveStyle({
      display: "flex",
      "flex-direction": flexDirection
    });
  });
});
