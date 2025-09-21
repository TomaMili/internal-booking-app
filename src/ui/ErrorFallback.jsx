import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="h-screen w-full bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-white border border-gray-200 rounded-md p-12 flex-0 w-1/2 text-center absolute">
        <h1 className="mb-4">Something went wrong 🧐</h1>
        <p className="font-sono mb-8 text-gray-500">{error.message}</p>
        <Button type="secondary" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
