function Button({ children, onClick, type, disabled }) {
  const base =
    "text-xl font-medium cursor-pointer rounded-sm shadow-black shadow-xs btn-20";
  const styles = {
    primary: base + " px-16! py-4! hover:text-zinc-100!",
    secondary: base + " px-10 py-2.5",
    small: base + " px-2! py-1! text-sm",
    smallS: base + " px-2! py-1! text-sm bg-zinc-300!",
    rounded: base + " rounded-4xl! py-3 px-3",
  };

  if (onClick) {
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
