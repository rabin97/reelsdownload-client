"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center overflow-hidden"
            aria-label="Toggle theme"
        >
            <Sun className="h-5 w-5 absolute transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            <Moon className="h-5 w-5 absolute transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </button>
    );
}
