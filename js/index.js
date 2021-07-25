/*
 * vendicated.dev
 * Copyright (C) 2021 Vendicated - See https://github.com/Vendicated/vendicated.dev/tree/main/LICENSE
 */

const pages = document.querySelectorAll(".main-body");
const navs = document.querySelectorAll(".nav-item");

jumpTo(window.location.hash);

function jumpTo(hash) {
    if (hash.length < 2) hash = "#home";
    const title = hash.slice(1);
    const page = document.getElementById(title);
    const nav = document.getElementById("nav-" + title);
    if (!page || !nav) {
        window.location = "#home";
        throw new Error("No such page: " + hash);
    }
    pages.forEach((p) => p.classList.add("hidden"));
    page.classList.remove("hidden");
    navs.forEach((n) => n.classList.remove("nav-item-selected"));
    nav.classList.add("nav-item-selected");
}

window.onhashchange = () => jumpTo(window.location.hash);
