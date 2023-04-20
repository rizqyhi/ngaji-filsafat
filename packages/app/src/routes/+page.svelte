<script lang="ts">
  import type { PageData } from "./$types";
  import EpisodeCard from "../components/EpisodeCard.svelte";
  import Header from "../components/Header.svelte";

  export let data: PageData;
</script>

<svelte:head>
  <title>Ngaji Filsafat</title>
</svelte:head>

<Header>
  <h1 class="text-xl font-bold text-white">Ngaji Filsafat</h1>
</Header>

<div class="px-4 py-8 relative z-10 bg-white rounded-t-3xl">
  {#each data.episodes as episode (episode.id)}
    <EpisodeCard
      episode={episode.episode}
      title={episode.title}
      topic={episode.topic}
      videoId={episode.video_ids[0]}
    />
  {/each}
</div>
