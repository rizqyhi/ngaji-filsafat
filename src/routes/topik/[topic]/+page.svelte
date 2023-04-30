<script lang="ts">
  import type { PageServerData } from "./$types";
  import { page } from "$app/stores";
  import { slugify } from "$lib/helpers";
  import Header from "$components/Header.svelte";
  import ContentWrapper from "$components/ContentWrapper.svelte";
  import EpisodeCard from "$components/EpisodeCard.svelte";

  export let data: PageServerData;
</script>

<Header title={$page.params.topic} backTo="/topik" />

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
