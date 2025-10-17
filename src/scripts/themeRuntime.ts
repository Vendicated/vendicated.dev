import "./polyfills";

export type Theme = "light" | "dark" | "system";

export function getCurrentTheme(): "light" | "dark" {
    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme || !["light", "dark"].includes(currentTheme)) {
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    return currentTheme as any;
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

{
    function loadPrismTheme() {
        const theme = getCurrentTheme();
        document
            .getElementById("prism-theme")!
            .setAttribute("href", `/styles/prism-one-${theme}.css`);
    }

    document.addEventListener("themechange", loadPrismTheme);

    document.head.append(
        Object.assign(document.createElement("link"), {
            id: "prism-theme",
            rel: "stylesheet",
        })
    );

    loadPrismTheme();
}
