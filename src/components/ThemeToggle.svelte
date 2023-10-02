<script lang="ts">
    import { toggleTheme } from "scripts/util";

    function onClick(e: MouseEvent) {
        toggleTheme();

        // do not blur if this press was keyboard triggered
        if (e instanceof PointerEvent && e.pointerType)
            (e.target as HTMLElement).blur();
    }
</script>

<button on:click={onClick} aria-label="toggle dark theme" tabindex="0" />

<style>
    button {
        all: unset;

        cursor: pointer;
        margin-left: 1em;
        width: 1.2em;
        height: 1.2em;
        background-image: url(/assets/sun.svg);
        background-repeat: no-repeat;
        background-size: cover;
        filter: brightness(0%) saturate(100%);

        transition: transform 0.12s linear;
    }

    :global(.dark) button {
        background-image: url(/assets/moon.svg);
        filter: brightness(0%) saturate(100%) invert(100%);
    }

    button:hover,
    button:focus {
        transform: scale(1.2) rotate(-5deg);
        outline: none;
    }

    button:focus:not(:hover)::after {
        position: absolute;
        content: "";
        height: 1px;
        bottom: -4px;
        width: 100%;
        background: var(--color);
        transform: scale(1.2) rotate(5deg);
    }
</style>
