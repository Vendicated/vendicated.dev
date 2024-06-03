import type { APIRoute } from "astro";
import { getEnv } from "../scripts-ssr/env";

function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.length > 0;
}

export const put: APIRoute = async ({ request, locals }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (!isNonEmptyString(name) || !isNonEmptyString(message))
        return new Response(null, {
            status: 400,
        });

    const header = `**From ${name.trim()} ${
        isNonEmptyString(email) ? `<${email.trim()}>` : ""
    }**`;

    const text = message.trim();
    const content = header + "\n\n" + text;

    if (header.length > 2000 || content.length > 10_500)
        return new Response(null, { status: 400 });

    const msgData = {
        allowed_mentions: {
            parse: [],
        },
        content: content.length > 2000 ? header : content,
    };

    const payload = new FormData();
    payload.set("payload_json", JSON.stringify(msgData));

    if (text.length > 2000)
        payload.set(
            "files[0]",
            new Blob([text], { type: "text/plain" }),
            "message.txt"
        );

    const url = new URL(getEnv(locals, import.meta.env, "CONTACT_WEBHOOK"));
    url.searchParams.set("wait", "true");

    const res = await fetch(url, {
        method: "POST",
        body: payload,
    });

    if (!res.ok) {
        console.error(
            "Error while executing contact webhook:",
            res.status,
            "\n" + (await res.text().catch(() => "Unknown error"))
        );

        return new Response("Failed to post message", {
            status: 502,
        });
    }

    return new Response(null, {
        status: 201,
    });
};
