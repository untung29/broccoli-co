import { UseFormReturnType } from "@mantine/form";
import { TFormValues } from "../../Home";

export type TRequestInviteFormProps = {
  onSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  form: UseFormReturnType<TFormValues>;
  isLoading: boolean;
};
