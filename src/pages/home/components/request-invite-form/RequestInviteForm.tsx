import { hasLength, isEmail, useForm } from "@mantine/form";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import styles from "./RequestInviteForm.module.css";
import WithSpinner from "../../../../hocs/with-spinner/WithSpinner.component";
import { FormEventHandler } from "react";

type TRequestInviteFormProps = {
  onSubmit: FormEventHandler;
};

const RequestInviteForm = ({ onSubmit }: TRequestInviteFormProps) => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      name: hasLength({ min: 3 }, "Name should be at least 3 characters"),
    },
  });

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
