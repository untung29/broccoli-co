import { ModalProps } from "@mantine/core";
import { ReactNode } from "react";

export type TModal = {
  children: ReactNode;
} & Pick<ModalProps, "opened" | "onClose" | "title">;
