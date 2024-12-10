import { render, screen } from "../../test-utils";
import Footer from "./Footer";
import { TFooterProps } from "./types";

describe("Footer Component", () => {
  const defaultProps: TFooterProps = {
    title: "Testing title",
    copyright: "Testing copyright",
  };

  it("should render a <footer> element as the root element", () => {
    const { container } = render(<Footer {...defaultProps} />);

    const footerElement = container.querySelector("footer");

    expect(footerElement).toBeInTheDocument();
  });

  it("should render the correct title", () => {
    render(<Footer {...defaultProps} />);

    const footerTitle = screen.getByText(defaultProps.title);

    expect(footerTitle).toBeInTheDocument();
  });

  it("should render the correct copyright", () => {
    render(<Footer {...defaultProps} />);

    const footerCopyright = screen.getByText(defaultProps.copyright);

    expect(footerCopyright).toBeInTheDocument();
  });
});
