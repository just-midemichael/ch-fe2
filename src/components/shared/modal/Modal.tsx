import type { FC, PropsWithChildren } from "react";
import { useRef } from "react";

import match from "@/utils/match";

import { useHandleOutsideClicks } from "@/hooks/useHandleOutsideClicks";
import styles from "./Modal.module.scss";
import type ModalProps from "./Modal.props";

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  variant = "filled",
  openModal,
  setOpenModal,
  ...rest
}) => {
  const pattern = match(variant, {
    plain: styles.pattern__plain,
    filled: styles.pattern__filled,
    default: ""
  });

  const overlay = useRef(null);

  const close = () => {
    setOpenModal(false);
  };

  useHandleOutsideClicks(overlay, close);

  return (
    <>
      {openModal && (
        <div className={styles.bg} {...rest}>
          <div className={styles.overlay} ref={overlay} />
          <div className={`${styles.modal} ${pattern}`}>{children}</div>
        </div>
      )}
    </>
  );
};
export default Modal;
