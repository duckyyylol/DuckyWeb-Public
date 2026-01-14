<script lang="ts">
    import icon_Music from "$lib/assets/music.png";

    interface LegacyTrack {
        id: string;
        artist: string;
        imageUrl: string;
        album: string;
        title: string;
        trackUrl: string;
        addedTimestamp: number;
        genres: string[];
        duration: number;
    }

    import { PUBLIC_API_URL } from "$env/static/public";
    import { onMount } from "svelte";
    import VerticalSection from "./VerticalSection.svelte";
    import { MediaQuery } from "svelte/reactivity";

    let track: LegacyTrack | undefined = $state();

    function fetchTrack() {
        fetch(`/api/nowplaying`).then((r) =>
                r.json().then((currentTrack) => {
                    if (currentTrack.id !== null) {
                        
                        if (track !== undefined && track.id == currentTrack.id)
                            return;
                        if (track == undefined) return (track = currentTrack);
                        if (track.id !== currentTrack.id)
                            return (track = currentTrack);
                    }
                }),
            );
    }
    onMount(async () => {
        fetchTrack();
        setInterval(fetchTrack, 3e3);
    });

    

    let computedString = $derived(`${decodeURIComponent(track !== undefined ? track?.title : "")}${(track != undefined && track.artist != null) ? `- ${decodeURIComponent(track.artist)}` : ""}`)
    let mobileQuery = new MediaQuery("max-width: 800px");


</script>

{#if track != undefined}
    <VerticalSection align={mobileQuery.current ? "center" : "left"} gap={0}>
        <h3 class="fira-semibold noselect">listening to</h3>
        <div>
            <img src={icon_Music} alt="music note icon" />
            <p class="fira-normal noselect" id="sep">|</p>
            
            <p class="fira-normal">{decodeURIComponent(track.title)}{computedString.length < 28 ? (track.artist != null ? ` - ${decodeURIComponent(track.artist)}` : '') : ""}</p>
            
        </div>
    </VerticalSection>
{/if}

<style>
    @import url("$lib/styles/fonts.css");

    h3 {
        font-size: 1.4em;
        line-height: 0.9em !important;
    }

    p {
        line-height: 1.1em !important;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.3em;
        max-width: 350px;
    }

    #sep {
        opacity: 0.5;
    }

    img {
        user-select: none;
        width: 1.4em;
        height: 1.4em;
    }
</style>
