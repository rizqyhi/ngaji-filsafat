<script lang="ts">
  import type { PageServerData } from "./$types";
  import Header from "../../components/Header.svelte";
  import ContentWrapper from "../../components/ContentWrapper.svelte";

  export let data: PageServerData;
</script>

<Header title="Topik A-Z" backTo="/" />

<ContentWrapper withoutPadding>
  <ul>
    {#each Object.entries(data.topics) as [topic, episodes]}
      <li class="p-4 border-b">
        <a href="/topik/{topic}" class="flex items-center justify-between">
          <span class="mr-4">{topic}</span>
          <span
            class="px-2 py-1 rounded-md bg-cyan-100 text-cyan-600 text-xs font-medium tracking-wider"
            >#{episodes[0].episode} &ndash; #{episodes[episodes.length - 1]
              .episode}</span
          >
        </a>
      </li>
    {/each}
  </ul>
</ContentWrapper>
