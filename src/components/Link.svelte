<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";

    // the only reason this file is Svelte is because Astro treats whitespace after inline elements
    // like "a" as desired, meaning the newline between a and style is preserved

    const {
        href,
        title,
        class: className,
        children,
        ...rest
    }: HTMLAnchorAttributes = $props();
</script>

<a class={className} {href} {title} {...rest}>
    {@render children?.()}
</a>

<style>
    a {
        text-decoration: underline;
        text-decoration-color: var(--color-semi-trans);
        color: var(--color);

        transition: color 0.2s ease;
    }

    a:hover,
    a:focus {
        color: var(--accent);
        text-decoration-color: var(--accent);
        text-decoration-thickness: 2px;
        outline: none;
    }
</style>
