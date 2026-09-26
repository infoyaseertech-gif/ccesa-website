interface PlaceholderPhotoProps {
  label: string;
  className?: string;
  organic?: boolean;
}

/**
 * Stand-in for real photography. Renders a brand-toned duotone wash with a
 * caption so every image slot is clearly marked as pending real assets.
 * Swap the <div> for a real <Image> once photography is available — the
 * className controls sizing/aspect ratio from the call site.
 */
export default function PlaceholderPhoto({ label, className = "", organic = false }: PlaceholderPhotoProps) {
  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-forest-dark ${
        organic ? "rounded-[3rem_1.5rem_3rem_1.5rem] md:rounded-[5rem_2rem_5rem_2rem]" : "rounded-md"
      } ${className}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(201,162,39,0.35), transparent 45%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.15), transparent 50%)",
        }}
      />
      <span className="relative z-10 m-4 rounded-md bg-black/25 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
