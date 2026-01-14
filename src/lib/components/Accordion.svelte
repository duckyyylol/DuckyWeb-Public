<script>
    import SocialEntry from "./SocialEntry.svelte";
    import icon_Lego from "$lib/assets/lego.png"
    import icon_Music from "$lib/assets/music.png"
    import icon_Github from "$lib/assets/github.png"
    import icon_Svelte from "$lib/assets/sv_icon.png"


    import { MediaQuery } from "svelte/reactivity";
    import { outerHeight, scrollY } from "svelte/reactivity/window";
    import HorizontalSection from "./HorizontalSection.svelte";

</script>
<accordion>
    <div class="empty"></div>
    <details name="accordion" open>
        <summary class="fira-bold">about</summary>
        <div>
            <p class="fira-normal">Hello! I’m Em, a 21 y/o developer, designer, and community manager.</p>
            <p class="fira-normal">My goal is to create experiences that communities enjoy through events, social media, and bespoke tools that help communities prosper.</p>
        </div>
    </details>
    <details name="accordion">
        <summary class="fira-bold">projects</summary>
        <div>
            <p class="fira-normal">My current focus is <a target="_blank" href="/travel/towers">Elden Towers</a>, an Elden Ring-themed Discord community that hosts “towers,” which are almost their own mini servers inside of Elden Towers managed entirely by the tower’s members.</p>
            <p class="fira-normal">I started at Elden Towers in early 2023, and since then I have aided in overhauling the entire server and building a wonderful staff team.</p>
            <p class="fira-normal">We now provide near-daily in-game events, as well as large-scale war events streamed on <a target="_blank" href="/travel/towers/twitch">Twitch</a>.</p>
            <p class="fira-normal">Our Tower Maiden bot provides the leaders of each tower near-full control over their portion of the Discord server.</p>
        </div>
    </details>
    <details name="accordion">
        <summary class="fira-bold">extras</summary>
        
            <!-- <SocialEntry entry={{img: icon_Lego, label: "Built LEGO Sets", name: "Ducky's Extras", withMention: false, url: "/extras/lego"}}/> -->
            <SocialEntry entry={{img: icon_Github, label: "Ducky Radio System", name: "Ducky's Extras", withMention: false, url: "/travel/github/radio"}}/>
            <SocialEntry entry={{img: icon_Github, label: "This Website's Source Code", name: "Ducky's Extras", withMention: false, url: "/travel/github/web"}}/>

            <!-- <h2 class="fira-bold">my friends</h2>
            <p class="fira-normal sub italic">people that have a web presence that are also my friend :)</p> -->
            <!-- <SocialEntry entry={{img: "/src/lib/assets/the0show.webp", label: "the0show", name: "Ducky's Friends", withMention: true, url: "/travel/friends/the0show"}}/>
            <SocialEntry entry={{img: "/src/lib/assets/gloam.webp", label: "GloamEyedQueen", name: "Ducky's Friends", withMention: true, url: "/travel/friends/gloam"}}/> -->
            <br>
            <HorizontalSection align="left">
                <p class="footer sub fira-normal italic">🦆 <a target="_blank" href="https://ducky.wiki">ducky.wiki</a> / <a target="_blank" href="https://duckyyy.lol">duckyyy.lol</a></p>
                <p class="footer sub fira-normal italic"> | Made with </p>
                <a target="_blank" href="https://svelte.dev"><img src={icon_Svelte} alt="svelte logo"></a>
            </HorizontalSection>
        
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
        font-size: 1.3em;
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
        width: 8.5em;
    }
    
</style>