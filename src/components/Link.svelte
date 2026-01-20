<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes } from "svelte/elements";

    // the only reason this file is Svelte is because Astro treats whitespace after inline elements
    // like "a" as desired, meaning the newline between a and style is preserved

    const {
        href,
        title,
        class: className,
        children,
        focusRing = true,
        ...rest
    }: Omit<HTMLAnchorAttributes, "children"> & {
        focusRing?: boolean;
        children: string | Snippet;
    } = $props();
</script>

<a class={[className, focusRing && "focus-ring"]} {href} {title} {...rest}>
    {#if typeof children === "string"}
        {children}
    {:else}
        {@render children?.()}
    {/if}
</a>

<style>
    a {
        text-decoration: underline;
        text-decoration-color: var(--color-semi-trans);
        color: var(--color);

        transition: color 0.2s ease;
    }

    a:hover {
        color: var(--accent);
        text-decoration-color: var(--accent);
        text-decoration-thickness: 2px;
        outline: none;
    }

    a:global(.focus-ring) {
        padding: 0.2em;
        border-radius: 8px;

        &:focus-visible {
            text-decoration: none;
        }
    }
</style>
