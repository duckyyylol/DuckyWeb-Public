<script lang="ts">
    import type { Brickable_LegoSet } from "../../routes/extras/[[slug]]/+page";

    const {set}: {set: Brickable_LegoSet} = $props();
</script>

<h1>{set.name}</h1>