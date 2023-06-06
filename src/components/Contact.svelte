<script lang="ts">
    async function handleSubmit(e: Event) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch("/contact", {
            method: "PUT",
            body: formData,
        });

        if (response.ok) {
            alert("Message sent!");
            form.reset();
            form.querySelector("textarea")!.style.height = "auto";
        } else {
            alert("Something went wrong!");
        }
    }

    // Auto-resize textarea
    function handleTextareaInput(e: Event) {
        const textarea = e.target as HTMLTextAreaElement;

        textarea.style.height = "0";
        if (textarea.scrollHeight < 400) {
            textarea.style.height = `${textarea.scrollHeight}px`;
        } else {
            // Limit height to 400px and restore overflow-y scrollbar
            textarea.style.height = "400px";
            textarea.style.overflowY = "scroll";
        }
    }
</script>

<form on:submit={handleSubmit}>
    <div>
        <label>
            Name
            <input
                type="text"
                name="name"
                placeholder="Me"
                maxlength="100"
                required
            />
        </label>
        <label>
            Email
            <input
                type="email"
                name="email"
                placeholder="me@example.com"
                required
            />
        </label>
    </div>
    <label>
        Message
        <textarea
            on:input={handleTextareaInput}
            name="message"
            placeholder="Hello! I just wanted to let you know that I am very cute and..."
            required
            minlength="10"
            maxlength="10000"
        />
    </label>

    <button type="submit">Send Message</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1.2em;
    }

    div {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.5em;
    }

    @media (max-width: 600px) {
        div {
            grid-template-columns: minmax(0, 1fr);
            gap: 1.2em;
        }
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    input,
    textarea,
    button {
        padding: 0.75em;
        border-radius: 6px;

        color: var(--text);
        background-color: var(--surface2);
        border: 1px solid var(--color-semi-trans);
        transition: 200ms border-color;
    }

    textarea {
        overflow-y: hidden;
        min-height: 5em;
        box-sizing: border-box;
    }

    :is(input, textarea):focus {
        border-color: var(--accent);
        outline: none;
    }

    input:invalid:not(:placeholder-shown) {
        border-color: var(--warning);
    }

    button {
        color: var(--text);
        cursor: pointer;
        transition: 200ms;
        transition-property: color, background;
    }

    button:is(:active, :hover) {
        background: var(--accent);
        color: var(--background-color);
    }
</style>
