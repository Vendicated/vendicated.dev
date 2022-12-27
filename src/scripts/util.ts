export function toggleTheme(dark = !document.body.classList.contains('dark')) {
    // temporarily disable transitions to avoid color transitions
    document.body.classList.add("disable-transitions");

    document.body.classList.toggle("dark", dark);

    setImmediate(() =>
        document.body.classList.remove("disable-transitions")
    );

    return dark;
}

