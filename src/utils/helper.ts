import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cls = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
