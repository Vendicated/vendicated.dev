#!/usr/bin/env node

const CleanCSS = require("clean-css");
const fs = require("fs");
const path = require("path");
const rmrf = require("rimraf");

const { styles, errors, warnings } = new CleanCSS().minify(["css/index.css"]);

warnings.forEach((w) => console.warn(w));
if (errors.length) {
    errors.forEach((e) => console.error(e));
    process.exit(1);
}

rmrf("dist", (e) => {
    if (e) {
        console.error("Error while removing dist dir", e);
        process.exit(1);
    }

    fs.mkdirSync("dist");
    fs.mkdirSync("dist/js");
    fs.mkdirSync("dist/css");
    fs.mkdirSync("dist/assets");
    fs.copyFileSync("index.html", "dist/index.html");
    fs.copyFileSync("js/index.js", "dist/js/index.js");
    fs.writeFileSync("dist/css/index.css", styles);
    fs.readdirSync("assets").forEach((f) => fs.copyFileSync(path.join("assets", f), path.join("dist/assets", f)));

    console.info("Done!");
});
