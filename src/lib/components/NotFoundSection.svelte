<script>
    import VerticalSection from "./VerticalSection.svelte";

</script>

<VerticalSection align="left" gap={0}>
    <div class="empty"></div>
    <container>
        <h1 class="fira-bold">404</h1>
        <p class="fira-normal sub italic">what are you doing here?</p>
        <h3 class="fira-normal">
            This page doesn't exist, but it was worth a shot anyway.
        </h3>
        <a href="/" class="fira-bold">{"<"} Go Home</a>
    </container>
</VerticalSection>

<style>
    @import url("$lib/styles/core.css");
    @import url("$lib/styles/fonts.css");

    @media only screen and (max-width: 800px) {
        container {
            text-align: center;
            height: 100%;
            margin-bottom: 2em;
        }
    }

    container {
        width: 40vw;
    }

    h1 {
        font-size: 5em;
        line-height: 0.5 !important;
    }

    h3 {
        font-size: 1.5em;
        line-height: 1.5 !important;
    }

    .empty {
        /* height: 200px; */
        aspect-ratio: 67/96;
        width: 8.5em;
    }
</style>
