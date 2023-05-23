<script lang="ts">
  import type { PageServerData } from "./$types";
  import { page } from "$app/stores";
  import { generateEpisodeRoute } from "$lib/routeHelper";
  import Header from "$components/Header.svelte";
  import ContentWrapper from "$components/ContentWrapper.svelte";
  import EpisodeCard from "$components/EpisodeCard.svelte";

  export let data: PageServerData;
</script>

<Header title={$page.params.figure} backTo="/tokoh" />

<ContentWrapper>
  {#each data.episodes as episode (episode.id)}
    <EpisodeCard
      episode={episode.episode}
      title={episode.title}
      topic={episode.topic}
      videoId={episode.video_ids[0]}
      href={generateEpisodeRoute(episode.episode, episode.title)}
    />
  {/each}
</ContentWrapper>
