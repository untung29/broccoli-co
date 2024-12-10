import { render, screen } from "../../test-utils";
import Header from "./Header";
import { THeaderProps } from "./types";

describe("Header Component", () => {
  const defaultProps: THeaderProps = {
    title: "Test",
  };

  it("renders the header with the correct title", () => {
    render(<Header {...defaultProps} />);

    const headerTitle = screen.getByText(defaultProps.title);

    expect(headerTitle).toBeInTheDocument();
  });
});
