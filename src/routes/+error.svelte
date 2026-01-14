<script lang="ts">
    import DuckyAvatar from "$lib/components/DuckyAvatar.svelte";
    import HorizontalSection from "$lib/components/HorizontalSection.svelte";
    import NotFoundSection from "$lib/components/NotFoundSection.svelte";
    import NowPlaying from "$lib/components/NowPlaying.svelte";
    import SocialEntry from "$lib/components/SocialEntry.svelte";
    import VerticalSection from "$lib/components/VerticalSection.svelte";
    import type { Config } from "$lib/config";
    import config from "$lib/config";
    import { onMount } from "svelte";
    import { MediaQuery } from "svelte/reactivity";

    let mobileQuery = new MediaQuery("max-width: 800px");
    let tabletQuery = new MediaQuery("max-width: 1000px");

    let cfg: Config = $state(config);

    cfg.role = "WHAT HAVE YOU DONE!?!?"

    let scrolled = $state(false);

    onMount(() => {
        window.onscroll = () => {
            scrolled = true;
        }
    })
</script>

{#snippet stuff(
    vertical_align: "center" | "left" = "left",
    r: string | null = null,
)}
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

{#snippet scrollIndicator()}
    <div class="scrollIndicator">
        <h3 class="fira-bold scrollText">Please Scroll Down</h3>
        <h3 class="scrollArrow">↓</h3>
    </div>
{/snippet}

<website>
    {#if !mobileQuery.current}
        <HorizontalSection align="center" gap={tabletQuery.current ? 16 : 32}>
            {@render stuff(
                "left"
            )}
            <NotFoundSection />
            <!-- {#if slug === "lego"}
                <LegoSection sets={legoSets}/>
            {/if} -->
        </HorizontalSection>
    {:else}
        <VerticalSection align="center" gap={0}>
            {#if !scrolled}
                {@render scrollIndicator()}
            {/if}
            {@render stuff(
                "center"
            )}
            <hr />
            <!-- {#if slug === "lego"}
                <LegoSection sets={legoSets}/>
            {/if} -->
            <NotFoundSection />
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

    hr {
        height: 0.3em;
        margin: 2em 0 2em 0;
        width: 70vw;
        outline: none;
        border: none;
        border-radius: var(--br);

        background-color: var(--scrollbar-color);
        opacity: 0.3;
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
        /* overflow-y: hidden; */
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