import { UseFormReturnType } from "@mantine/form";
import Button from "../../../../components/button/Button";
import styles from "./RequestInviteForm.module.css";
import { TFormValues } from "../../Home";
import { Text, TextInput } from "@mantine/core";

type TRequestInviteFormProps = {
  onSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  form: UseFormReturnType<TFormValues>;
  isLoading: boolean;
};

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
      />

      <TextInput
        label="Email"
        type="email"
        placeholder="Type your email"
        {...form.getInputProps("email")}
        key={form.key("email")}
      />

      <TextInput
        label="Confirm Email"
        type="email"
        placeholder="Confirm your email"
        {...form.getInputProps("confirmEmail")}
        key={form.key("confirmEmail")}
      />

      <Button loading={isLoading} type="submit">
        Submit Form
      </Button>
    </form>
  );
};

export default RequestInviteForm;
