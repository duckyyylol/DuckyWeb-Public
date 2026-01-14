<script lang="ts">
    import DuckyAvatar from "$lib/components/DuckyAvatar.svelte";
    import VerticalSection from "$lib/components/VerticalSection.svelte";

    
    import SocialEntry from "$lib/components/SocialEntry.svelte";
    import HorizontalSection from "$lib/components/HorizontalSection.svelte";
    import NowPlaying from "$lib/components/NowPlaying.svelte";
    import Accordion from "$lib/components/Accordion.svelte";
    import { MediaQuery } from "svelte/reactivity";
    import { onMount } from "svelte";
    import type { PageProps } from "./$types.js";
    import type { Config } from "$lib/config.js";
    import config from "$lib/config.js";

    
    let { data }: PageProps = $props();
    
    const ua = (() => data)().userAgent;

    

    let cfg: Config = $state(config);

    let tabletQuery = new MediaQuery("max-width: 1000px");
    let mobileQuery = new MediaQuery("max-width: 800px");

    let scrolled: boolean = $state(false);

    let browser:
        | "firefox"
        | "chrome"
        | "chromium"
        | "opera"
        | "safari"
        | "seamonkey"
        | "none" = "none";

    function setBrowser(
        userAgent: string,
    ):
        | "firefox"
        | "chrome"
        | "chromium"
        | "opera"
        | "safari"
        | "seamonkey"
        | "none" {
        userAgent = userAgent.toLowerCase();

        if (userAgent.includes("safari")) browser = "safari";
        if (userAgent.includes("chrome")) browser = "chrome";
        if (userAgent.includes("firefox")) browser = "firefox";
        if (userAgent.includes("chromium")) browser = "chromium";
        if (userAgent.includes("opr") || userAgent.includes("opera"))
            browser = "opera";
        if (userAgent.includes("seamonkey")) browser = "seamonkey";

        return browser;
    }

    onMount(() => {
        window.onscroll = () => {
            scrolled = true;
        };
        if (ua != null) {
            let nb = setBrowser(ua);
            switch (nb) {
                case "chrome": {
                    cfg.role = "try duckduckgo";
                    break;
                }
                case "chromium": {
                    cfg.role = "so close, try again next time";
                    break;
                }
                case "firefox": {
                    cfg.role = "home is where the AI killswitch is";
                    break;
                }
                case "opera": {
                    cfg.role = "you like spyware, do ya?";
                    break;
                }
                case "safari": {
                    cfg.role = "the ecosystem is king";
                    break;
                }
                case "seamonkey": {
                    cfg.role = "old timer, huh?";
                    break;
                }
            }
        }
    });
</script>

{#snippet stuff(vertical_align: "center" | "left" = "left", r: string | null = null)}
    <!-- Left side of horizontal split -->
    <left>
        <VerticalSection align={vertical_align} gap={0}>
            <!-- Profile Picture -->
            <DuckyAvatar />
            <!-- Username & Pronouns -->
            <VerticalSection align={vertical_align} gap={0}>
                <h1 class="username fira-bold">{cfg.username}</h1>
                <p class="pronouns fira-normal fade">
                    {cfg.pronouns.join("/")}
                </p>
                {#if r != null}
                    <p class="role fira-normal fade role">
                        {r}
                    </p>
                    {:else if cfg.role !== null}
                    <p class="role fira-normal fade role">
                        {cfg.role}
                    </p>
                {/if}
            </VerticalSection>
            <!-- END Username & Pronouns -->

            <!-- Reach Out Section -->
            <VerticalSection align={vertical_align} gap={0}>
                <h3 class="heading_reachOut fira-semibold noselect">
                    reach out
                </h3>
                <!-- Actual list of Socials -->
                <VerticalSection align="left" gap={4}>
                    {#each cfg.socials as entry}
                        <SocialEntry {entry} />
                    {/each}
                </VerticalSection>
                <!-- END Actual list of Socials -->
            </VerticalSection>
            <!-- END Reach Out Section -->
            <!-- Now playing section -->
            <VerticalSection align={vertical_align}>
                <NowPlaying />
            </VerticalSection>
            <!-- END Now playing section -->
        </VerticalSection>
    </left>
    <!-- END Left side of horizontal split -->
{/snippet}
{#snippet otherStuff(vertical_align: "center" | "left" = "left")}
    <!-- Right side of horizontal split -->
    <VerticalSection align={vertical_align} gap={0}>
        <Accordion />
    </VerticalSection>
    <!-- END Right side of horizontal split -->
{/snippet}

{#snippet scrollIndicator()}
    <div class="scrollIndicator">
        <h3 class="fira-bold scrollText">Please Scroll Down</h3>
        <h3 class="scrollArrow">↓</h3>
    </div>
{/snippet}

<website>
    {#if !mobileQuery.current}
        <HorizontalSection align="center" gap={tabletQuery.current ? 16 : 32}>
            {@render stuff()}
            {@render otherStuff()}
        </HorizontalSection>
    {:else}
        <VerticalSection align="center" gap={0}>
            {#if !scrolled}
                {@render scrollIndicator()}
            {/if}
            {@render stuff("center")}
            {@render otherStuff("center")}
        </VerticalSection>
    {/if}
</website>

<style>
    @import url("$lib/styles/core.css");
    @import url("$lib/styles/fonts.css");


    .scrollIndicator {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1em;
        animation: bounce 1.6s linear infinite forwards;
        color: var(--scrollbar-color);
    }

    .scrollText {
        font-size: 1.2em;
        line-height: 0.3 !important;
    }

    .scrollArrow {
        font-size: 1.3em;
        line-height: 0.3 !important;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(0.5em);
        }

        60% {
            transform: translateY(0.4em);
        }

        80% {
            transform: translateY(0.3em);
        }
        100% {
            transform: translateY(0em);
        }
    }

    website {
        padding-top: 1em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        background: linear-gradient(
            291deg,
            var(--background-from) 0.84%,
            var(--background-to) 97.84%
        );
    }

    left {
        width: 30vw;
    }

    p.role {
        font-size: 1em;
        max-width: 250px;
        line-height: 1.4 !important;
    }

    p.pronouns {
        line-height: 0.1em !important;
    }

    .fade {
        opacity: var(--op-80);
    }

    h1 {
        font-size: 3.3em;
        line-height: 0.1 !important;
    }

    h2 {
        font-size: 2.4em;
        line-height: 0.9em !important;
    }

    h3 {
        font-size: 1.8em;
        line-height: 0.9em !important;
    }

    p {
        font-size: 1.2em;
        line-height: 0.1em;
    }

    @media only screen and (max-width: 800px) {
        website {
            height: auto;
        }
        left {
            width: 100%;
        }
        h1 {
            font-size: calc(3.3em + 0.2em);
            line-height: 0.1 !important;
        }

        h2 {
            font-size: calc(2.4em + 0.2em);
            line-height: 0.9em !important;
        }

        h3 {
            font-size: calc(1.8em + 0.2em);
            line-height: 0.9em !important;
        }

        p {
            font-size: calc(1.2em + 0.2em);
            line-height: 0.1em !important;
        }

        p.role {
            font-size: calc(1em + 0.2em);
            /* line-height: 0.1em !important; */
            text-align: center;
        }
    }
</style>
