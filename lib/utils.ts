import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: Date): string {
  return new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(input);
}
