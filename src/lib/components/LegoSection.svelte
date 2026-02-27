<script lang="ts">
    import LegoSet from "./LegoSet.svelte";

    let {sets} = $props();
</script>

<legosection>
    <div class="empty"></div>
    {#each sets as set}
    <LegoSet {set}/>
    {/each}
</legosection>

<style>
@media only screen and (max-width: 800px) {
        legosection {
            margin-top: -5em;
            text-align: center;
            height: 100%;
        }
    }

    legosection {
        width: 60vw;
    }
    .empty {
        /* height: 200px; */
        aspect-ratio: 67/96;
        width: 8.5em;
    }
</style>