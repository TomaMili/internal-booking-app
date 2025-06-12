function InputField({ label, error, children }) {
  return (
    <>
      {label && (
        <label
          className="block text-sm font-medium text-zinc-700 mb-1"
          htmlFor={children[0].props.id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {children}
        {error && (
          <span className="absolute text-xs -bottom-5 right-0 font-mulish text-red-600">
            {error}
          </span>
        )}
      </div>
    </>
  );
}

export default InputField;
