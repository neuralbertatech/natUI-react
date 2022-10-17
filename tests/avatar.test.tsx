import { Avatar } from "../src";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";

describe("Avatar Component", () => {
  let rendered: RenderResult;
  const orignalGlobalImage = window.Image;

  beforeAll(() => {
    (window.Image as any) = class MockImage {
      onload: () => void = () => { };
      src: string = "static/1x1.png";
      constructor() {
        setTimeout(() => {
          this.onload();
        }, 300);
        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = orignalGlobalImage;
  });

  beforeEach(() => {
    rendered = render(
      <Avatar src="/test.png" alt="Joe Bloggins" />
    );
  });

  test("fallback", () => {
    expect(rendered.getByText(/^J$/)).toBeInTheDocument();
  });

  test("alt property", async () => {
    expect(rendered.queryByRole("img")).not.toBeInTheDocument();
    expect(await rendered.findByRole("img")).toBeInTheDocument();
    expect(rendered.getByAltText(/Joe Bloggins/)).toBeInTheDocument();
  });
});
