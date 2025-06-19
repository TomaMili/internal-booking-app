import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisHorizontal, HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ActionsContext = createContext();

function Actions({ children }) {
  const [activeId, setActiveId] = useState("");
  const [pos, setPos] = useState(null);

  const close = () => setActiveId("");
  const open = setActiveId;

  return (
    <ActionsContext.Provider value={{ activeId, open, close, pos, setPos }}>
      {children}
    </ActionsContext.Provider>
  );
}

function Action({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Toggle({ id }) {
  const { activeId, open, close, setPos } = useContext(ActionsContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();

    if (activeId === id) {
      close();
    } else {
      setPos({
        x: window.innerWidth - rect.width - rect.x,
        y: rect.y + rect.height + 8,
      });
      open(id);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-none border-none p-1.5 rounded-sm translate-x-3 hover:bg-white transition-all duration-200 "
    >
      <HiEllipsisHorizontal size={24} className="text-zinc-700" />
    </button>
  );
}

function List({ id, children }) {
  const { activeId, pos, close } = useContext(ActionsContext);
  const ref = useOutsideClick(close);

  if (activeId !== id) return null;

  return createPortal(
    <ul
      position={pos}
      ref={ref}
      style={{
        position: "absolute",
        top: pos.y + window.scrollY,
        right: pos.x,
        zIndex: 1000,
      }}
      className="bg-white shadow-md rounded-md"
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(ActionsContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <button
        onClick={handleClick}
        className="text-lg cursor-pointer rounded-md text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 w-full text-left bg-none px-4 py-2 flex items-center gap-2 transition-all duration-300"
      >
        {icon}
        {children}
      </button>
    </li>
  );
}

Actions.Action = Action;
Actions.Toggle = Toggle;
Actions.List = List;
Actions.Button = Button;

export default Actions;
