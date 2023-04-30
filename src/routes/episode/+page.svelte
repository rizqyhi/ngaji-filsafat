<script lang="ts">
  import type { PageServerData } from "./$types";
  import { slugify } from "$lib/helpers";
  import Header from "$components/Header.svelte";
  import ContentWrapper from "$components/ContentWrapper.svelte";

  export let data: PageServerData;
</script>

<Header title="Indeks Episode" backTo="/" />

<ContentWrapper withoutPadding>
  <ul>
    {#each data.episodes as episode}
      <li>
        <a
          href={`/${episode.episode}/${slugify(episode.title)}`}
          class="flex items-center justify-between p-4 border-b"
        >
          <span class="mr-6">{episode.title}</span>
          <span
            class="px-2 py-1 rounded-md bg-cyan-100 text-cyan-600 text-xs font-medium tracking-wider"
            >#{episode.episode}</span
          >
        </a>
      </li>
    {/each}
  </ul>
</ContentWrapper>
