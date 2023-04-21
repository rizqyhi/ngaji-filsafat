<script lang="ts">
  import type { PageData } from "./$types";
  import { slugify } from "$lib/helpers";
  import EpisodeCard from "../components/EpisodeCard.svelte";
  import Header from "../components/Header.svelte";
  import ContentWrapper from "../components/ContentWrapper.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Ngaji Filsafat</title>
</svelte:head>

<Header>
  <h1 class="text-xl font-bold text-white">Ngaji Filsafat</h1>
</Header>

<ContentWrapper>
  {#each data.episodes as episode (episode.id)}
    <EpisodeCard
      episode={episode.episode}
      title={episode.title}
      topic={episode.topic}
      videoId={episode.video_ids[0]}
      href={`/${episode.episode}/${slugify(episode.title)}`}
    />
  {/each}
</ContentWrapper>
