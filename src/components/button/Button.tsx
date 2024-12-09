import { Button as MButton } from "@mantine/core";
import { TButtonProps } from "./types";

const Button = ({
  children,
  size = "md",
  variant = "outline",
  w = "100%",
  onClick,
}: TButtonProps) => {
  return (
    <MButton onClick={onClick} size={size} variant={variant} w={w}>
      {children}
    </MButton>
  );
};

export default Button;
