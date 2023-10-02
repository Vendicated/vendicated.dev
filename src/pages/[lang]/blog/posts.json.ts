import type { APIContext, APIRoute } from "astro";
import type { BlogPost } from "scripts-ssr/types";

async function buildPostData(ctx: APIContext, req: () => Promise<BlogPost>) {
    const post = await req();
    const { description, publishDate, section, tags, title, updateDate } = post.frontmatter;
    return {
        url: new URL(post.url, ctx.url.origin).href,
        title,
        description,
        section,
        tags: tags.split(",").map(s => s.trim()) || [],
        publishDate,
        updateDate: updateDate ?? null,
    };
}

export const get: APIRoute = async (ctx: APIContext) => {
    const files = Object.values(import.meta.glob<BlogPost>("./*.{md,mdx}"));
    const posts = await Promise.all(
        Object.values(files).map(file => buildPostData(ctx, file))
    );
    posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());

    return { body: JSON.stringify(posts) };
};
