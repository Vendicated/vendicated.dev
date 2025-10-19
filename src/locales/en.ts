export default {
    name: "English",
    routes: {
        home: "Home",
        about: "About",
        contact: "Contact",
        blog: "Blog",
    },
    footer: {
        message: "read if cute",
        sourceCode: "source code",
    },
    home: {
        title: "V's Site",
        description: "read if cute",
        hello: "Hi, I'm <0>V!</0>",
        about: "I'm a self-taught software developer who's very passionate about Linux & Android and free/libre privacy-friendly software",
        about2: "I also really love all kinds of music, especially black metal!",
        socialsTitle: "You can find me all over the interwebs:",
        friendsTitle: "Also check out my cute friends!",
    },
    about: {
        title: "About me",
        description: "Learn more about me and my projects",
        intro: "I absolutely love tech and open source! I have been programming since early 2020 and have taught myself a multitude of languages and frameworks since then.",
        stack: "Tech Stack",
        projects: "Projects",
    },
    contact: {
        title: "Contact me",
        description: "Learn how to contact me",
        socials: "Socials",
        noscript: "You need to enable JavaScript to use this form.",
    },
    blog: {
        title: "V's Blog",
        description: "in the mind of a crazy person",
        teehee: "I really wanna write something here at some point",
    },
    "404": {
        title: "404 Not Found",
        description: "Are you lost? :(",
        notFound: "Oops! That page was not found :(",
        lost: "Either you're lost or I might have just not implemented this page yet.",
        goHome: "Click Koishi to get back home!",
        koishiAlt: "Koishi going xD",
    },
} as const;
