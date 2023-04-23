<script lang="ts">
  import type { PageServerData } from "./$types";
  import Header from "../../../components/Header.svelte";
  import ContentWrapper from "../../../components/ContentWrapper.svelte";

  export let data: PageServerData;
  export const episode = data.episode;

  let currentVideoIndex = 0;

  function updateCurrentVideoIndex(index: number) {
    currentVideoIndex = index;
  }
</script>

<Header title="#{episode.episode}: {episode.title}" backTo="/" />

<ContentWrapper>
  <iframe
    class="w-full aspect-video rounded-xl"
    src="https://www.youtube-nocookie.com/embed/{episode.video_ids[
      currentVideoIndex
    ]}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />

  {#if episode.video_ids.length > 1}
    {#each episode.video_ids as _, index}
      <button class="mr-4" on:click={() => updateCurrentVideoIndex(index)}
        >Bagian {index + 1}</button
      >
    {/each}
  {/if}
</ContentWrapper>
