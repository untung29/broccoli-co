import { UseFormReturnType } from "@mantine/form";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import styles from "./RequestInviteForm.module.css";
import WithSpinner from "../../../../hocs/with-spinner/WithSpinner.component";
import { FormEventHandler } from "react";
import { TFormValues } from "../../Home";

type TRequestInviteFormProps = {
  onSubmit: FormEventHandler;
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
      />

      <Input
        label="Email"
        type="email"
        placeholder="Type your email"
        {...form.getInputProps("email")}
      />

      <Button type="submit">Submit Form</Button>
    </form>
  );
};

const RequestInviteFormContainer = WithSpinner(RequestInviteForm);

export default RequestInviteFormContainer;
