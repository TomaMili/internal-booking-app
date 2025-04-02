function ErrorMessage({ message }) {
  return (
    <div>
      <p className="text-xl font-semibold text-red-600">
        <span className="font-bold text-2xl">ERROR:</span> {message}
      </p>
    </div>
  );
}

export default ErrorMessage;
