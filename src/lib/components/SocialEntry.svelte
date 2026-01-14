<script lang="ts">
    let {entry}: {entry: {
            name: string;
            label: string;
            img: string;
            withMention: boolean;
            url?: string;
        }} = $props();

        let num1 = 3;
        let num2 = 31;
</script>

<div title="{entry.name} | {entry.withMention ? "@" : ""}{entry.label}">
    <img src="{entry.img}" alt="{entry.name} logo">
    <p class="fira-normal" id="sep">|</p>
    <p class="fira-normal">
        <a onclick={entry.name !== "Email" ? (() => {}) : () => {
            let num = prompt(`What is ${num1} x ${num2}?`, "0")
            if(!num || Number.isNaN(parseInt(num)) || parseInt(num) !== (num1 * num2)) {
                alert("Incorrect. You are not worthy of entering my sacred inbox.")
            } else {
                location.replace(`mailto:${num1 * num2}@ducky.wiki`)
            }

        }} target={entry.url != "#" ? "_blank" : ""} href={entry.url ? entry.url : `/travel/${entry.name.toLowerCase()}`}>{entry.withMention ? "@" : ""}{entry.label}</a>
    </p>
</div>

<style>
    @import url("$lib/styles/fonts.css");

    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 0.3em;
    }

    #sep {
        opacity: 0.5;
        user-select: none;
    }

    img {
        user-select: none;
        width: 1.4em;
        height: 1.4em;
        border-radius: 4px;
    }

    a {
        color: white;
        text-decoration: none;
        line-height: 1.2 !important;
    }

    @media only screen and (max-width: 800px) {
        p {
            text-align: left;
        }
    }

</style>