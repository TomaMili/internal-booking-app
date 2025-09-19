import { AnimatePresence, motion } from "framer-motion";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindow }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindow) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-dvh bg-black/20 backdrop-blur-sm z-100"
      onClick={close}
    >
      <div className="fixed left-1/2 top-1/2 -translate-1/2">
        <AnimatePresence>
          <motion.div
            key="backdrop"
            initial={{ y: -10, scale: 0.9, opacity: 1 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -10, scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          >
            <button
              onClick={close}
              className="absolute top-4 right-6 cursor-pointer text-zinc-500 hover:text-zinc-700 transition text-2xl"
            >
              ×
            </button>
            {cloneElement(children, { onCloseModal: close })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
