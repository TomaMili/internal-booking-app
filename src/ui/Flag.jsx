export function Flag({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="max-w-8 rounded-sm block border border-gray-100"
    />
  );
}
