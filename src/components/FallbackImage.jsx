export default function FallbackImage({ src, fallback, alt, className, ...props }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={(event) => {
        const img = event.currentTarget;
        if (fallback && !img.dataset.fallbackApplied) {
          img.dataset.fallbackApplied = 'true';
          img.src = fallback;
        }
      }}
      {...props}
    />
  );
}
