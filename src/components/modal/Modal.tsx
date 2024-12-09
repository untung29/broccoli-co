import { Modal as MModal } from "@mantine/core";
import { TModal } from "./type";

const Modal = ({ children, opened, onClose }: TModal) => {
  return (
    <MModal opened={opened} onClose={onClose} centered>
      {children}
    </MModal>
  );
};

export default Modal;
