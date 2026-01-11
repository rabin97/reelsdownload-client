import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isValidInstagramUrl(url: string): boolean {
    const instagramRegex =
        /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel|tv|stories|username)\/([a-zA-Z0-9_-]+)\/?/i;
    // Also support simple profile urls like instagram.com/username
    const profileRegex =
        /^(https?:\/\/)?(www\.)?instagram\.com\/([a-zA-Z0-9_\.]+)$/i;

    return instagramRegex.test(url) || profileRegex.test(url);
}

export function sanitizeInput(input: string): string {
    if (!input) return "";

    // 1. Trim whitespace
    let sanitized = input.trim();

    // 2. Remove any HTML tags (basic XSS prevention)
    sanitized = sanitized.replace(/<[^>]*>?/gm, "");

    // 3. Prevent script injection via javascript: protocol
    if (sanitized.toLowerCase().startsWith("javascript:")) {
        return "";
    }

    // 4. Encode special chars that might be problematic in some contexts
    // (Though for a URL we usually want to keep it mostly as is, just safe)
    // We mainly want to ensure no malicious code is embedded.
    // For this specific use case (URL input), we can clamp it to allowed characters logic
    // or just rely on the validation regex which is strict.

    return sanitized;
}

export function formatNumber(num: number): string {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
}
