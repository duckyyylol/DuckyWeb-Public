<script lang="ts">
    import type { SetupEntry, SetupProductPrice } from "$lib";
    import MerchantAmazon from "./MerchantAmazon.svelte";
    import MerchantExternal from "./MerchantExternal.svelte";
    import MerchantGithub from "./MerchantGithub.svelte";
    import MerchantMicrocenter from "./MerchantMicrocenter.svelte";
    import MerchantNintendo from "./MerchantNintendo.svelte";
    import MerchantSony from "./MerchantSony.svelte";

    interface SetupCardProps<T extends "product" | "software"> {
        type: T;
        entry: SetupEntry<T>;
    }


    let {ent, type}: {type: "product" | "software", ent: any} = $props();

    let options: SetupCardProps<typeof type> = $derived({entry: ent, type});
    let entry: SetupEntry<typeof type> = $derived(options.entry);

    let price: SetupProductPrice | null = $derived(entry.type === "product" ? (entry as SetupEntry<"product">).item.price : null);

    let monthDict: Record<string, string> = {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    }


</script>

<div title="{entry.item.name} ({entry.item.category})" class="container">
    <div class="left">
        <img src="{entry.item.iconPath}" alt="{entry.item.name} logo">
        <p class="fira-normal" id="sep">{entry.item.category}</p>
        <p class="fira-bold title">{entry.item.name}</p>
    </div>
    <div class="right">
        {#if entry.type === "product"}
            {#if price}
            <div class="price">
                <p class="fira-bold gradient">{price?.approximate ? "~" : ""}{price.price ? `$${price?.price?.toLocaleString()}` : "Unknown"}</p>
                <p class="fira-semibold sep">as of {monthDict[price.asOfMonth.toString()]} {price.asOfYear}</p>
            </div>
            {/if}
            {#if entry.item.merchants.sort((a, b) => a.priority - b.priority).length > 0}
            <div class="merchants">

                {#each entry.item.merchants as merchant}
                <a href="{merchant.baseUrl}{entry.item.merchantSlugs.find(m => m.merchantId === merchant.id)?.slug || "/"}" target="_blank">
                    {#if merchant.id === "amazon"}
                    <MerchantAmazon />
                    {:else if merchant.id === "microcenter"}
                    <MerchantMicrocenter />
                    {:else if merchant.id === "nintendo"}
                    <MerchantNintendo />
                    {:else if merchant.id === "sony"}
                    <MerchantSony />
                    {/if}
                </a>

                {/each}
            </div>
            {/if}

            {:else}
            {#if entry.item.merchants.sort((a, b) => a.priority - b.priority).length > 0}
            <div class="merchants">

                {#each entry.item.merchants as merchant}
                <a href="{merchant.baseUrl}{entry.item.merchantSlugs.find(m => m.merchantId === merchant.id)?.slug || "/"}" target="_blank">
                    {#if merchant.id === "github"}
                    <MerchantGithub />
                    {:else if merchant.id === "external"}
                    <MerchantExternal />
                    {/if}
                </a>

                {/each}
            </div>
            {/if}
        {/if}
    </div>
</div>

<style>
    @import url("$lib/styles/fonts.css");

    .title, .price .sep {
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 1;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .title {
        width: 80%;
        line-height: 1.2em; 
    }

    .container {
        width: 90%;
        background-color: var(--background-from);
        padding: 0.66em 1.33em;
        border-radius: var(--br);
    }

    .container  {
        margin: 0;
    }

    .left {
        gap: 1em;
        align-items: center;
        justify-content: flex-start;
    }

    .right {
        gap: 2em !important;
    }


    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.3em;
    }

    .price p, .right p, .left p {
        margin: 0;
    }

    .price .sep {
        font-size: 0.7em;
        opacity: var(--op-80);
        text-align: right;
    }

    .price {
        flex-direction: column;
        align-items: flex-end;
        gap: 0.33em;
    }

    .merchants {
        gap: 1em;
    }

    .gradient {
        font-size: 1.1em;
        background-clip: text;
        -webkit-background-clip: text;
        background-image: var(--text-gradient);
        color: transparent;
    }

    #sep {
        opacity: 0.5;
        user-select: none;
    }

    img {
        user-select: none;
        width: 1.4em;
        height: 1.4em;
        border-radius: 4px;
    }

    img:hover {
        transition: all 0.2s;
        filter: brightness(0.7) sepia();
    }

    img:not(:hover) {
        transition: all 0.2s;
        filter: brightness(1);
    }

    a {
        color: white;
        text-decoration: none;
        line-height: 1.2 !important;
    }

    @media only screen and (max-width: 800px) {
        .container {
            width: 100%;
        }
        .price {
            display: none;
        }
    }

</style>