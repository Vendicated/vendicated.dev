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
        socialsTitle: "Du kannst mich online überall finden:",
        friendsTitle: "Besuche auch meine Freunde!",
    },
    contact: {
        title: "Kontaktier mich",
        description: "Erfahre wie du mich kontaktieren kannst",
        sendMessage: "Send mir eine Nachricht",
        name: "Name",
        namePlaceholder: "Ich",
        email: "Email (damit ich dir antworten kann :3)",
        emailPlaceholder: "ich@beispiel.com",
        message: "Nachricht",
        messagePlaceholder:
            "Hi Ven, ich wollte dir einfach nur sagen, dass ich sehr süß bin!",
        send: "Senden",
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
