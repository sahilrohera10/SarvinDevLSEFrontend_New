"use client";

import { Modal } from "flowbite-react";

export default function Modals({
  children,
  openModal = false,
  setOpenModal = () => {},
}) {
  return (
    <div>
      <Modal
        show={openModal}
        dismissible
        popup
        onClose={() => setOpenModal(false)}
        style={{ background: "rgb(0,0,0,0.4)", padding: 0 }}
      >
        {children}
      </Modal>
    </div>
  );
}
