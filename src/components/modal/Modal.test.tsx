import { vi } from "vitest";
import { render, screen, fireEvent } from "../../test-utils";
import Modal from "./Modal";

describe("Modal Component", () => {
  const handleOnClose = vi.fn();

  it("should render the modal when opened", () => {
    render(
      <Modal opened={true} onClose={handleOnClose} title="Test Modal">
        Modal Content
      </Modal>
    );

    const modalTitle = screen.getByText("Test Modal");
    const modalContent = screen.getByText("Modal Content");

    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });

  it("should not render the modal when closed", () => {
    render(
      <Modal opened={false} onClose={handleOnClose} title="Hidden Modal">
        Hidden Content
      </Modal>
    );
    const modalTitle = screen.queryByText("Hidden Modal");
    const modalContent = screen.queryByText("Hidden Content");

    expect(modalTitle).not.toBeInTheDocument();
    expect(modalContent).not.toBeInTheDocument();
  });

  it("should display the modal title", () => {
    render(
      <Modal opened={true} onClose={handleOnClose} title="Test Title">
        Content
      </Modal>
    );
    const modalTitle = screen.getByText("Test Title");

    expect(modalTitle).toBeInTheDocument();
  });

  it("should call onClose when the modal is closed", () => {
    render(
      <Modal opened={true} onClose={handleOnClose} title="Closable Modal">
        Content
      </Modal>
    );

    const closeButton = document.querySelector(".mantine-Modal-close");

    expect(closeButton).not.toBeNull();

    // closeButton must exist because we have checked its presence
    fireEvent.click(closeButton!);

    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
