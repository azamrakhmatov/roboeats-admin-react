import { cn } from "@/lib/utils";

type StrengthBarProps = {
  score: number;
  colors: readonly string[];
  label?: string;
};

const StrengthBar = ({ score, colors, label }: StrengthBarProps) => {
  return (
    <div className="mt-1.5 space-y-1">
      <div className="flex gap-1">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-all duration-300",
              i < score ? colors[score - 1] : "bg-muted"
            )}
          />
        ))}
      </div>
      {label && <p className="text-xs text-muted-foreground">{label}</p>}
    </div>
  );
};

export default StrengthBar;