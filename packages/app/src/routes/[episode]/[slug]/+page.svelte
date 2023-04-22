<script lang="ts">
  import type { PageServerData } from "./$types";
  import Header from "../../../components/Header.svelte";
  import ContentWrapper from "../../../components/ContentWrapper.svelte";

  export let data: PageServerData;
  export const episode = data.episode;
</script>

<svelte:head>
  <title>#{episode.episode}: {episode.title} - Ngaji Filsafat</title>
  <link rel="canonical" href="/{episode.episode}" />
</svelte:head>

<Header title="#{episode.episode}: {episode.title}" backTo="/" />

<ContentWrapper>
  <iframe
    class="w-full aspect-video rounded-xl"
    src="https://www.youtube-nocookie.com/embed/{episode.video_ids[0]}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</ContentWrapper>
