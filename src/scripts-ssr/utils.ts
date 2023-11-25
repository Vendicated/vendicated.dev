export async function redirectTo404(url: URL, headers: Headers) {
    const res = await fetch(new URL("/404", url), {
        headers,
    });

    return new Response(res.body, {
        status: 404,
        statusText: "Not Found",
        headers: {
            ...res.headers,
            "Content-Type": "text/html",
        },
    });
}
