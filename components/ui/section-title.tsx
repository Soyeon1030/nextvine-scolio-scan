interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl font-serif">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  );
}
