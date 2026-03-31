export const STRENGTH_LABELS = ["약함", "보통", "강함", "매우 강함"] as const;

export const STRENGTH_COLORS = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-orange-400",
  "bg-emerald-500",
] as const;

export const getPasswordStrength = (pw: string): number => {
  let s = 0;
  if (pw.length >= 6) s++;
  if (pw.length >= 10) s++;
  if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
};
