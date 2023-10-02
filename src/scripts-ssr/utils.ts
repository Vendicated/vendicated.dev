export async function redirectTo404(url: URL, headers: Headers) {
    const res = await fetch(new URL("/404", url), {
        headers,
    });

    console.log([...res.headers.entries()]);
    return new Response(res.body, {
        status: 404,
        statusText: "Not Found",
        headers: res.headers,
    });
}
