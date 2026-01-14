<script lang="ts">
    const {children, align, gap = 8} = $props();

</script>

<div style="gap:{gap}px" class="{align}">
    {@render children()}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
    }

    .left {
        justify-content: center;
        align-items: flex-start;
    }

    .right {
        justify-content: center;
        align-items: flex-end;
    }

    .center {
        justify-content: center;
        align-items: center;
    }
</style>