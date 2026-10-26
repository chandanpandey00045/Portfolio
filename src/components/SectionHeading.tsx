type Props = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "left"
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-2xl text-center" : "mb-12 max-w-2xl"}>
      <span className="inline-block rounded-md bg-blue-50 px-2.5 py-1 font-mono text-xs font-semibold text-blue-700 tracking-wide uppercase">
        {label}
      </span>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
