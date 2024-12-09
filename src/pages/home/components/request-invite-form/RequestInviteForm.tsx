import { UseFormReturnType } from "@mantine/form";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import styles from "./RequestInviteForm.module.css";
import WithLoader from "../../../../hocs/with-loader/WithLoader";
import { TFormValues } from "../../Home";

type TRequestInviteFormProps = {
  onSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  form: UseFormReturnType<TFormValues>;
};

const RequestInviteForm = ({ onSubmit, form }: TRequestInviteFormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        label="Name"
        type="text"
        placeholder="Name"
        {...form.getInputProps("name")}
        key={form.key("name")}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Type your email"
        {...form.getInputProps("email")}
        key={form.key("email")}
      />

      <Input
        label="Confirm Email"
        type="email"
        placeholder="Confirm your email"
        {...form.getInputProps("confirmEmail")}
        key={form.key("confirmEmail")}
      />

      <Button type="submit">Submit Form</Button>
    </form>
  );
};

const RequestInviteFormContainer = WithLoader(RequestInviteForm);

export default RequestInviteFormContainer;
