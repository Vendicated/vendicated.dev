export default {
    name: "English",
    routes: {
        home: "Home",
        about: "About",
        tech: "Tech",
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
        about: "I'm a self-taught software developer who's very passionate about technology, freedom, and privacy.",
        about2: "I also really love Music, especially Black Metal!",
        socialsTitle: "Find me online:",
        friendsTitle: "Also check out my cute friends!",
    },
    tech: {
        title: "Tech",
        description: "Cool things I've made",
        intro:
            "I'm a big fan of <0>free (as in freedom) software</0>, and develop most things out in the open!\n" +
            "I love learning new things, so I have tried a lot of different programming languages. However, my favourites to work with are Typescript and Go.",
        stack: "Tech Stack",
        projects: "Projects",
    },
    about: {
        title: "About Me",
        description: "Get to know me better",
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
