import { Modal as MModal } from "@mantine/core";
import { TModal } from "./type";

const Modal = ({ children, opened, onClose, title }: TModal) => {
  return (
    <MModal title={title} opened={opened} onClose={onClose} centered>
      {children}
    </MModal>
  );
};

export default Modal;
