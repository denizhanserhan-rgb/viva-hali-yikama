import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-navy">{label}</span>
      <input
        id={inputId}
        className={cn(
          "h-12 w-full rounded-xl border border-line bg-mist/40 px-4 text-[15px] text-ink outline-none transition focus:border-champagne/50 focus:bg-white focus:ring-2 focus:ring-champagne/20",
          className,
        )}
        {...props}
      />
    </label>
  );
}
