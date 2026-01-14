<script lang="ts">
    const {children, align, gap = 8, actuallyVertical = false} = $props();

</script>

<div style="gap:{gap}px;flex-direction:{actuallyVertical ? "column" : "row"}" class="{align}">
    {@render children()}
</div>

<style>
    div {
        display: flex;
        width: auto;
        height: auto;
    }

    .left {
        justify-content: flex-start;
        align-items: center;
    }

    .right {
        justify-content: flex-end;
        align-items: center;
    }

    .center {
        justify-content: center;
        align-items: flex-start;
    }
</style>