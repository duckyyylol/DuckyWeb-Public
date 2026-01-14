<script lang="ts">
    import src from "$lib/assets/duckypfptransparent.png";
    
    let animating = $state(false);
    
</script>

{#if !animating}
    <a href="/"><img {src} alt="ducky logo" oncontextmenu={(e) => {e.preventDefault(); animating = true; }} onanimationend={(e) => {animating = false;} }  draggable="false"/></a>
    
{:else}
    <img class="spin" {src} alt="ducky logo" oncontextmenu={(e) => {e.preventDefault(); animating = true; }} onanimationend={(e) => {animating = false;} }  draggable="false"/>
{/if}

<style>
    img {
        width: 8em;
        aspect-ratio: 67/96;
        user-select: none;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg) scale(1);
        }

        to {
            transform: rotate(360deg) scale(0.8);
        }
    }

    .spin {
        animation: spin 1s ease-out both;
    }
</style>