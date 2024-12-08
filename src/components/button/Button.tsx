import { Button as MButton } from "@mantine/core";
import { TButtonProps } from "./types";

const Button = ({ children }: TButtonProps) => {
  return (
    <MButton size="md" variant="outline">
      {children}
    </MButton>
  );
};

export default Button;
