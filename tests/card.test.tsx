import { Button, Card, CardBody, CardButtons } from "../src";

import { render } from "@testing-library/react";

describe("Card Component", () => {
  const date = new Date(1970, 1);
  const rendered = render(
    <Card title="Card Title" subtitle="Card Subtitle" date={date}>
      <CardBody>
        ...
      </CardBody>
      <CardButtons>
        <Button key={0} text="button 1" href="/link1" />
        <Button key={1} text="button 2" href="/link2" />
      </CardButtons>
    </Card>
  );

  test.concurrent("card title property", () => {
    expect(rendered.getByText(/card title/i)).toBeInTheDocument();
  });

  test.concurrent("card subtitle property", () => {
    expect(rendered.getByText(/card subtitle/i)).toBeInTheDocument();
  });

  test.concurrent("card date property", () => {
    expect(rendered.getByText(/1970$/)).toBeInTheDocument();
  });
});
