import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
};

export function Select({ label, options, className, id, ...props }: SelectProps) {
  const selectId = id ?? props.name;
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-navy">{label}</span>
      <select
        id={selectId}
        className={cn(
          "h-12 w-full rounded-xl border border-line bg-mist/40 px-4 text-[15px] text-ink outline-none transition focus:border-champagne/50 focus:bg-white focus:ring-2 focus:ring-champagne/20",
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
