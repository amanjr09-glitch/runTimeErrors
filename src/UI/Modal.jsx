import React from "react";
import Modal from "react-modal";
import { useAuth } from "../../context/auth";
import { AnimatePresence, motion } from "framer-motion";

Modal.setAppElement("#root");

function CustomModal({ open = false, closeModal = () => {}, children }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderWidth: "0px",
      marginRight: "-50%",
      backgroundColor: "transparent",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.3)",
      zIndex:10
    },
  };
  return (
    <Modal
      isOpen={open}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Sheetsway Active Modal"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            className="border rounded dark:text-gray-200 dark:border-gray-400 bg-gray-50 dark:bg-gray-500 "
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}

export default CustomModal;
