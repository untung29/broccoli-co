import { ButtonProps } from "@mantine/core";
import { MouseEventHandler, ReactNode } from "react";

export type TButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: HTMLButtonElement["type"];
} & Pick<
  ButtonProps,
  "size" | "variant" | "w" | "disabled" | "loading" | "color"
>;
