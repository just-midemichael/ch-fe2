export default interface ModalProps {
  variant?: "plain" | "filled";
  openModal: boolean;
  setOpenModal: (state: boolean) => void;
}
