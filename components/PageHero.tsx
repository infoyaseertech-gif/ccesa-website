interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="panel-border border-b bg-white">
      <div className="section-tight">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className={`h1 ${eyebrow ? "mt-4" : ""}`}>{title}</h1>
        <p className="lede mt-4">{description}</p>
      </div>
    </section>
  );
}
