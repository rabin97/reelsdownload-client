import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isValidInstagramUrl(url: string): boolean {
    const instagramRegex =
        /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reels?|tv|stories|username)\/([a-zA-Z0-9_-]+)\/?$/i;
    // Also support simple profile urls like instagram.com/username
    const profileRegex =
        /^(https?:\/\/)?(www\.)?instagram\.com\/([a-zA-Z0-9_\.]+)\/?$/i;

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

    // 4. Remove query parameters from URLs
    // This handles cases like instagram.com/user?utm_source=... or instagram.com/reel/abc/?igsh=...
    try {
        if (
            sanitized.includes("instagram.com") ||
            sanitized.includes("instagr.am")
        ) {
            const queryIndex = sanitized.indexOf("?");
            if (queryIndex !== -1) {
                sanitized = sanitized.substring(0, queryIndex);
            }
            // Also remove trailing hash/fragments
            const hashIndex = sanitized.indexOf("#");
            if (hashIndex !== -1) {
                sanitized = sanitized.substring(0, hashIndex);
            }
        }
    } catch (e) {
        // Fallback if parsing fails
    }

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
