import Button from "./Button";
import { render, fireEvent, screen } from "../../test-utils";
import { vi } from "vitest";

describe("Button Component", () => {
  it("should render correctly with default props", () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
  });

  it("should trigger onClick when clicked", () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply custom props like size, variant, and width", () => {
    render(
      <Button size="lg" variant="filled" w="50%">
        Custom Button
      </Button>
    );

    const button = screen.getByRole("button", {
      name: /custom button/i,
    });

    expect(button).toHaveAttribute("data-size", "lg"); // Mantine size prop
    expect(button).toHaveAttribute("data-variant", "filled"); // Mantine variant prop
    expect(button).toHaveStyle({ width: "50%" }); // Custom width prop
  });

  it("should disable the button and shows loading state when loading", () => {
    render(<Button loading>Loading Button</Button>);
    const button = screen.getByRole("button", {
      name: /loading button/i,
    });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("data-loading", "true"); // Mantine loading attribute
  });

  it("should render as disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", {
      name: /disabled button/i,
    });

    expect(button).toBeDisabled();
  });
});
