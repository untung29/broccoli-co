import { render, screen, fireEvent } from "../../../../test-utils";
import SuccessfulInviteRequest from "./SuccessfulInviteRequest";
import { vi } from "vitest";

describe("SuccessfulInviteRequest Component", () => {
  const handleCloseModal = vi.fn();

  it("should render the success message and details", () => {
    render(<SuccessfulInviteRequest onClose={handleCloseModal} />);

    // Verify the success message
    expect(screen.getByText(/All Done/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /You're on the list! 🎉 We're excited to have you and will notify you as soon as we launch—stay tuned!/i
      )
    ).toBeInTheDocument();

    // Verify the "Close" button
    expect(screen.getByRole("button", { name: /Close/i })).toBeInTheDocument();
  });

  it("should call the onClose callback when the Close button is clicked", () => {
    render(<SuccessfulInviteRequest onClose={handleCloseModal} />);

    // Click the "Close" button
    const closeButton = screen.getByRole("button", { name: /Close/i });
    fireEvent.click(closeButton);

    // Ensure the onClose function was called
    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });
});
