import { TextInput } from "@mantine/core";
import { TInput } from "./type";

const Input = ({ label, placeholder }: TInput) => {
  return <TextInput label={label} placeholder={placeholder} />;
};

export default Input;
