<script lang="ts">
  import type { PageData } from "./$types";
  import EpisodeCard from "../components/EpisodeCard.svelte";

  export let data: PageData;
</script>

<div class="p-4">
  {#each data.episodes as episode (episode.id)}
    <EpisodeCard
      episode={episode.episode}
      title={episode.title}
      topic={episode.topic}
      videoId={episode.video_ids[0]}
    />
  {/each}
</div>
