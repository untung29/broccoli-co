import { vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "../../test-utils";
import Home from "./Home";
import { postInvitation } from "../../utils/api/post-invitation";

// Mock API response
vi.mock("../../utils/api/post-invitation", () => ({
  postInvitation: vi.fn(),
}));

describe("Home Page", () => {
  it("should render the Header component", () => {
    render(<Home />);

    // Header
    const headerTitle = screen.getByText("Broccoli & Co.");
    expect(headerTitle).toBeInTheDocument();
  });

  it("should render the main content", () => {
    render(<Home />);

    const mainTitle = screen.getByText("A better way to enjoy every day.");
    const mainDescription = screen.getByText(
      "Be the first to know when we launch"
    );
    const mainBtn = screen.getByRole("button", { name: /Request an invite/i });

    expect(mainTitle).toBeInTheDocument();
    expect(mainDescription).toBeInTheDocument();
    expect(mainBtn).toBeInTheDocument();
  });

  it("should render Footer component", () => {
    render(<Home />);

    const footerTitle = screen.getByText("Made with ♥ in Singapore");
    const footerCopyright = screen.getByText(
      "© 2024 Broccoli & Co. All rights reserved."
    );
    expect(footerTitle).toBeInTheDocument();
    expect(footerCopyright).toBeInTheDocument();
  });

  it("should open the modal when the 'Request an invite' button is clicked", () => {
    render(<Home />);

    const requestButton = screen.getByRole("button", {
      name: /Request an invite/i,
    });
    fireEvent.click(requestButton);
    const modal = screen.getByRole("dialog");

    expect(modal).toBeInTheDocument();
  });

  it("closes the modal when 'handleCloseModal' is triggered", () => {
    render(<Home />);

    const requestButton = screen.getByRole("button", {
      name: /Request an invite/i,
    });
    fireEvent.click(requestButton);

    const closeButton = document.querySelector(".mantine-Modal-close");

    expect(closeButton).not.toBeNull();

    fireEvent.click(closeButton!);

    const modal = screen.queryByRole("dialog");
    expect(modal).not.toBeInTheDocument();
  });

  it("should show validation errors when form inputs are invalid", () => {
    render(<Home />);

    const requestButton = screen.getByRole("button", {
      name: /Request an invite/i,
    });
    fireEvent.click(requestButton);

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(submitButton);

    const invalidEmailText = screen.getByText("Invalid email");
    const invalidName = screen.getByText(
      "Name should be at least 3 characters"
    );

    expect(invalidEmailText).toBeInTheDocument();
    expect(invalidName).toBeInTheDocument();

    // Testing for the confirmation email validation
    const emailField = screen.getByTestId("email-input");
    const confirmEmail = screen.getByTestId("confirm-email-input");

    fireEvent.change(emailField, {
      target: { value: "test@example.com" },
    });
    fireEvent.change(confirmEmail, {
      target: { value: "tes@example.com" },
    });

    fireEvent.click(submitButton);

    const invalidConfirmEmail = screen.getByText("Emails are not the same");

    expect(invalidConfirmEmail).toBeInTheDocument();
  });

  it("allows the user to fill out the form and shows a success message on valid submission", async () => {
    const postInvitationMock = vi.mocked(postInvitation);

    postInvitationMock.mockResolvedValue({
      data: "Registered",
    });

    render(<Home />);

    // Step 1: Open the modal
    const requestButton = screen.getByRole("button", {
      name: /request an invite/i,
    });
    fireEvent.click(requestButton);

    // Assert that the modal is open
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();

    // Step 2: Fill out the form
    // Verify input fields
    const nameField = screen.getByTestId("name-input");
    const emailField = screen.getByTestId("email-input");
    const confirmEmail = screen.getByTestId("confirm-email-input");

    fireEvent.change(nameField, {
      target: { value: "Test User" },
    });
    fireEvent.change(emailField, {
      target: { value: "test@example.com" },
    });
    fireEvent.change(confirmEmail, {
      target: { value: "test@example.com" },
    });

    // Step 3: Submit the form
    const submitButton = screen.getByRole("button", { name: /submit form/i });
    fireEvent.click(submitButton);

    // Step 4: Wait for the success message
    await waitFor(() => {
      const successTitle = screen.getByText(/all done/i);

      expect(successTitle).toBeInTheDocument();
    });
    const successContent = screen.getByText(
      /you're on the list! 🎉 we're excited to have you and will notify you as soon as we launch—stay tuned!/i
    );
    // Assert the modal is displaying the success component
    expect(successContent).toBeInTheDocument();

    // Step 5: Close the success modal
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    // Assert the modal is closed
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
