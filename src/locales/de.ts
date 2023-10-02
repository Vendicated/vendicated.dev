import { defineLocale } from ".";

export default defineLocale({
    name: "Deutsch",
    routes: {
        home: "Home",
        about: "About",
        contact: "Kontakt",
        blog: "Blog",
    },
    footer: {
        message: "wer das liest ist süß",
        sourceCode: "quellcode",
    },
    home: {
        title: "Vens Seite",
        description: "wer das liest ist süß!",
        hello: "Hallo, ich bin <0>Ven!</0>",
        about: "Ich bin ein selbstlernender Softwareentwickler. Am meisten interessiere ich mich für Linux & Android und freie Software",
        about2: "Außerdem liebe ich fast alle Arten von Musik, aber ganz besonders Black Metal (oder wie ich es gerne nenne, Schwarzmetall)!",
        socialsTitle: "Du kannst mich online überall finden:",
        friendsTitle: "Besuche auch meine Freunde!",
    },
    about: {
        title: "Über mich",
        description: "Erfahre mehr über mich und meine Projekte",
        intro: "Ich liebe Technik und Open Source! Ich programmiere seit Anfang 2020 und habe mir seitdem eine Vielzahl an Programmiersprachen und Frameworks selbst beigebracht.",
        stack: "Tech Stack",
        projects: "Projekte",
    },
    contact: {
        title: "Kontaktier mich",
        description: "Erfahre wie du mich kontaktieren kannst",
        socials: "Socials",
        sendMessage: "Send mir eine Nachricht",
        name: "Name",
        namePlaceholder: "Ich",
        email: "Email (damit ich dir antworten kann :3)",
        emailPlaceholder: "ich@beispiel.com",
        message: "Nachricht",
        messagePlaceholder:
            "Hi Ven, ich wollte dir einfach nur sagen, dass ich sehr süß bin!",
        send: "Senden",
        noscript:
            "Du musst JavaScript aktivieren um dieses Formular zu nutzen.",
    },
    blog: {
        title: "Vens Blog",
        description: "in den Gedanken eines Verrückten",
        teehee: "Ich möchte hier bald mal was schreiben",
    },
    "404": {
        title: "404 Not Found",
        description: "Hast du dich verirrt? :(",
        notFound: "Ups! Diese Seite existiert nicht :(",
        lost: "Entweder hast du dich verirrt, oder ich habe diese Seite vielleicht einfach noch nicht implementiert.",
        goHome: "Klick Koishi um zurück auf die Startseite zu gelangen!",
        koishiAlt: "Koishi lacht",
    },
});
