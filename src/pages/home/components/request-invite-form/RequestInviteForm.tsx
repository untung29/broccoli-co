import Button from "../../../../components/button/Button";
import styles from "./RequestInviteForm.module.css";
import { Text, TextInput } from "@mantine/core";
import { TRequestInviteFormProps } from "./types";

const RequestInviteForm = ({
  onSubmit,
  form,
  isLoading,
}: TRequestInviteFormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Text ta="center" size="1.5rem" fw={600}>
        Request an invite
      </Text>
      <TextInput
        label="Name"
        type="text"
        placeholder="Name"
        {...form.getInputProps("name")}
        key={form.key("name")}
        data-testid="name-input"
      />

      <TextInput
        label="Email"
        type="email"
        placeholder="Type your email"
        {...form.getInputProps("email")}
        key={form.key("email")}
        data-testid="email-input"
      />

      <TextInput
        label="Confirm Email"
        type="email"
        placeholder="Confirm your email"
        {...form.getInputProps("confirmEmail")}
        key={form.key("confirmEmail")}
        data-testid="confirm-email-input"
      />

      <Button loading={isLoading} type="submit">
        Submit Form
      </Button>
    </form>
  );
};

export default RequestInviteForm;
