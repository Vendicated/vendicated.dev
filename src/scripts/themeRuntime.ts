import { toggleTheme } from "./util";

let currentTheme = localStorage.getItem("theme");
if (!currentTheme) {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    localStorage.setItem("theme", currentTheme);
}

if (currentTheme === "dark") toggleTheme(true);
