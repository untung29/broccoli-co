import { Button as MButton } from "@mantine/core";
import { TButtonProps } from "./types";

const Button = ({
  children,
  size = "md",
  variant = "default",
  w = "100%",
  disabled,
  onClick,
  type,
  loading,
  color = "black",
}: TButtonProps) => {
  return (
    <MButton
      color={color}
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
