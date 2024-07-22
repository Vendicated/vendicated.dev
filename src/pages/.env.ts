import { APIRoute } from "astro";

const PasswordChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export const get: APIRoute = ({ request }) => {
    const lines = {
        CONTACT_WEBHOOK:
            "https://discord.com/api/v10/webhooks/3413910288148344883/xo0KOpNxtgKjjvqpGTEKu2fRJxXt6ZMwbX73chWfkEmqIFCNNoE1ZgrOopFwjPs0j3ro",
        GITHUB_TOKEN:
            "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",
        SSH_SERVER_IP: request.headers.get("cf-connecting-ip"),
        SSH_SERVER_PORT: Math.floor(Math.random() * 1000),
        SSH_USERNAME: "root",
        SSH_PASSWORD: Array.from(
            { length: 32 },
            () =>
                PasswordChars[Math.floor(Math.random() * PasswordChars.length)]
        ).join(""),
    };

    return new Response(
        Object.entries(lines)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n"),
        { status: 200 }
    );
};
