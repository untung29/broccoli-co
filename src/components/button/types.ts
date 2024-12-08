import { ButtonProps } from "@mantine/core";
import { ReactNode } from "react";

export type TButtonProps = {
  children: ReactNode;
} & Pick<ButtonProps, "size" | "variant" | "w">;
