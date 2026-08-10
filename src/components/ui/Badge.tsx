import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "light" | "success";
};

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        tone === "default" && "bg-mist text-navy",
        tone === "light" && "bg-white/15 text-white backdrop-blur",
        tone === "success" && "bg-success/10 text-success",
        className,
      )}
    >
      {children}
    </span>
  );
}
