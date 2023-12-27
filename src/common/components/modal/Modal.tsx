import { MouseEvent, ReactElement } from "react";
import { ModalContainer, ModalPaper } from "./style";

export const Modal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactElement | ReactElement[];
}) => {
  const handleClose = () => {
    onClose();
  };
  const stopEvent = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <ModalPaper onClick={handleClose}>
      <ModalContainer onClick={stopEvent}>{children}</ModalContainer>
    </ModalPaper>
  );
};
