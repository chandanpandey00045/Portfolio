type Props = { label: string; title: string; description?: string; align?: "left" | "center" };

export default function SectionHeading({ label, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-2xl text-center" : "mb-12 max-w-2xl"}>
      <p className={`section-label ${align === "center" ? "justify-center" : ""}`}>{label}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </div>
  );
}
