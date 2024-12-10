import { useForm } from "@mantine/form";
import { vi } from "vitest";
import { render, screen, renderHook } from "../../../../test-utils";
import RequestInviteForm from "./RequestInviteForm";

describe("RequestInviteForm Component", () => {
  const { result: formHook } = renderHook(() =>
    useForm({
      initialValues: {
        name: "",
        email: "",
        confirmEmail: "",
      },
    })
  );

  const onSubmitMock = vi.fn();

  it("should render the form fields and button", () => {
    render(
      <RequestInviteForm
        onSubmit={onSubmitMock}
        form={formHook.current}
        isLoading={false}
      />
    );

    // Verify form title
    const title = screen.getByText(/Request an invite/i);
    expect(title).toBeInTheDocument();

    // Verify input fields
    const nameField = screen.getByTestId("name-input");
    const emailField = screen.getByTestId("email-input");
    const confirmEmail = screen.getByTestId("confirm-email-input");

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(confirmEmail).toBeInTheDocument();

    // Verify button
    expect(
      screen.getByRole("button", { name: /Submit Form/i })
    ).toBeInTheDocument();
  });
});
