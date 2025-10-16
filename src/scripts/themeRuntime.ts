import "./polyfills";

export type Theme = "light" | "dark" | "system";

export function getCurrentTheme() {
    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme || currentTheme === "system") {
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    return currentTheme;
}

export function setTheme(theme: Theme) {
    if (theme === "system") {
        localStorage.removeItem("theme");
    } else {
        localStorage.setItem("theme", theme);
    }

    document.dispatchEvent(new Event("themechange"));
    console.log("Switched theme to", theme);
}

globalThis.setTheme = setTheme;
