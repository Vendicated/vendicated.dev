var KEYCODE_ENTER = 13
var KEYCODE_SPACE = 32

var $ = document.querySelector
var $$ = document.querySelectorAll
var $id = document.getElementById.bind(document)

var theme = localStorage.getItem("theme")

if (theme === "dark" || theme !== "light" && matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark")
    $id("theme-toggle").classList.add("dark")
}

function toggleTheme(event /*: undefined if mouse triggered, KeyEvent if KB triggered */) {
    if (event && event.keyCode !== KEYCODE_ENTER && event.keyCode !== KEYCODE_SPACE)
        return

    var isDark = document.body.classList.toggle("dark")
    var toggle = $id("theme-toggle")
    toggle.classList.toggle("dark", isDark)

    // If this was mouse triggered, blur (unfocus) the element, so it no
    // longer has the :focus style.
    if (!event)
        toggle.blur()

    localStorage.setItem("theme", isDark ? "dark" : "light")
    console.log("Switched theme to", localStorage.getItem("theme"))
}

// obfuscate my sserdda liame (read as if you were hebrew) so spambots can't find it as easily (hopefully)
var liam = $id("liam-social")
liam.innerHTML = Array.from(atob("GRIBCx4MDgMKCzcdBgQKGgdBARIb")).map((s, i) => String.fromCharCode(s.charCodeAt(0) ^ "owo".charCodeAt(Math.floor(i % 3)))).join("")
liam.href = Array.from(atob("CQ4HSwBPTj4XARNJDBQARR1PSQRFAQgNQwMVCwUuExpdRT8FXRpFFlI=")).map((s, i) => String.fromCharCode(s.charCodeAt(0) ^ "don't throw out your old bananas. Just blend one banana together with 250ml milk and you get a delicious drink".charCodeAt(Math.floor(i % 110)))).join("")

function TODO() {
    alert("soon :trollface:")
}