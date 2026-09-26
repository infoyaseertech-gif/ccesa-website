import type { LucideIcon } from "lucide-react";

const variantClass: Record<string, string> = {
  dark: "",
  light: "icon-badge-light",
  gold: "icon-badge-gold",
};

const iconColor: Record<string, string> = {
  dark: "text-gold",
  light: "text-forest-dark",
  gold: "text-navy",
};

export default function IconBadge({
  icon: Icon,
  variant = "dark",
}: {
  icon: LucideIcon;
  variant?: "dark" | "light" | "gold";
}) {
  return (
    <span className={`icon-badge ${variantClass[variant]}`}>
      <Icon className={`relative h-6 w-6 ${iconColor[variant]}`} strokeWidth={1.75} />
    </span>
  );
}
