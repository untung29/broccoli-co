import { Button as MButton } from "@mantine/core";
import { TButtonProps } from "./types";

const Button = ({
  children,
  size = "md",
  variant = "outline",
  w = "100%",
  disabled,
  onClick,
  type,
  loading,
}: TButtonProps) => {
  return (
    <MButton
      color="black"
      type={type}
      onClick={onClick}
      size={size}
      variant={variant}
      w={w}
      disabled={disabled}
      loading={loading}
    >
      {children}
    </MButton>
  );
};

export default Button;
