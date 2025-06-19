function ConfirmDeletion({ resName, onConfirm, disabled, onCloseModal }) {
  return (
    <div
      className="w-xl mx-auto p-6 bg-zinc-100 rounded-2xl shadow-xl space-y-5 font-light"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="font-semibold text-xl">
        Delete Room{" "}
        {Math.abs(Number(resName)) < 100
          ? Math.abs(Number(resName)) < 10
            ? `00${Math.abs(Number(resName))}`
            : `0${Math.abs(Number(resName))}`
          : Math.abs(Number(resName))}
      </h3>
      <p>
        Are you sure you want to delete Room
        {Math.abs(Number(resName)) < 100
          ? Math.abs(Number(resName)) < 10
            ? `00${Math.abs(Number(resName))}`
            : `0${Math.abs(Number(resName))}`
          : Math.abs(Number(resName))}
        ?
      </p>
      <div className="flex gap-3 justify-end pt-6 font-medium">
        <button
          className="text-lg cursor-pointer px-4 py-1.5 bg-zinc-300 text-emerald-700 rounded-md hover:bg-zinc-200 transition duration-300"
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="text-lg cursor-pointer px-4 py-1.5 bg-emerald-700 text-zinc-100 rounded-md hover:bg-emerald-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeletion;
