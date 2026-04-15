<script>
    import SocialEntry from "./SocialEntry.svelte";
    import icon_Lego from "$lib/assets/lego.png"
    import icon_Music from "$lib/assets/music.png"
    import icon_Github from "$lib/assets/github.png"
    import icon_Svelte from "$lib/assets/sv_icon.png"
    import icon_Discord from "$lib/assets/discord.png"
    import icon_PcCase from "$lib/assets/case.png"


    import { MediaQuery } from "svelte/reactivity";
    import { outerHeight, scrollY } from "svelte/reactivity/window";
    import HorizontalSection from "./HorizontalSection.svelte";
    import config from "$lib/config";
    import SetupCard from "./SetupCard.svelte";

</script>
<accordion>
    <div class="empty"></div>
    <h4 class="fira-normal"><a href="/">🏡 Back</a></h4>
    <h1 class="fira-bold">ducky's setup</h1>
    <p class="fira-normal italic">The products & tools I use on a daily basis</p>

    <details name="accordion" open>
        <summary class="fira-bold">pc</summary>
        <div class="column">
            {#each config.setup_products.pc as entry}
                <SetupCard ent={entry} type="product" />
            {/each}
        </div>
    </details>
    <details name="accordion">
        <summary class="fira-bold">gaming</summary>
        <div class="column">
            {#each config.setup_products.gaming as entry}
                <SetupCard ent={entry} type="product" />
            {/each}
        </div>
    </details>
    <details name="accordion">
        <summary class="fira-bold">peripherals</summary>
        
        <div class="column">
            {#each config.setup_products.peripherals as entry}
                <SetupCard ent={entry} type="product" />
            {/each}
        </div>
    </details>
    <details name="accordion">
        <summary class="fira-bold">software</summary>
        
        <div class="column">
            {#each config.setup_products.software as entry}
                <SetupCard ent={entry} type="software" />
            {/each}
        </div>
    </details>
</accordion>

<style>
    @import url("$lib/styles/fonts.css");
    @import url("$lib/styles/core.css");

    @media only screen and (max-width: 800px) {
        accordion {
            margin-top: -5em;
            text-align: center;
            height: 100%;
        }
    }

    .column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 1em;
        gap: 0.7em;
    }

    accordion {
        width: 60vw;
    }

    img {
        user-select: none;
        width: 1.2em;
    }

    summary {
        list-style-type: none;
        user-select: none;
        cursor: pointer;

        font-size: 2.3em;
        margin-bottom: 1em;
    }

    details summary:after {
        content: "\02f2";
        font-weight: 400;
        opacity: 0.8;
        font-size: 1.1em;
        position: relative;
        margin-left: 0.33em;
        bottom: 0.33em;
    }

    details[open] summary:after {
        content: "\02ef";
        font-weight: 400;
        opacity: 0.8;
        font-size: 1.3em;
        position: relative;
        margin-left: 0.33em;
        bottom: 0.33em;
    }

    

    p {
        font-size: 1.2em;
        line-height: 1.3em !important;
    }

    strong {
        font-weight: 700;
    }

    a {
        color: #663a09;
        opacity: 0.8;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        opacity: 1;
    }

    .empty {
        /* height: 200px; */
        aspect-ratio: 67/96;
        width: 6.66em;
    }
    
</style>