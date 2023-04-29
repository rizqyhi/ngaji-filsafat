<script lang="ts">
  import type { PageData } from "./$types";
  import { slugify } from "$lib/helpers";
  import EpisodeCard from "../components/EpisodeCard.svelte";
  import Header from "../components/Header.svelte";
  import ContentWrapper from "../components/ContentWrapper.svelte";
  import { Icon } from "@steeze-ui/svelte-icon";
  import {
    RectangleStack,
    Hashtag,
    Sparkles,
    Users,
  } from "@steeze-ui/heroicons";

  export let data: PageData;
</script>

<Header title="Ngaji Filsafat" />

<div
  class="sticky top-0 grid grid-cols-2 gap-4 pt-4 pb-16 px-4 bg-gradient-to-r from-cyan-300 to-teal-300"
>
  <a href="/topik" class="p-4 bg-white rounded-lg shadow">
    <Icon src={RectangleStack} class="w-6 h-6 mb-2 text-cyan-500" />
    <span class="font-medium">Topik A-Z</span>
  </a>
  <a href="/episode" class="p-4 bg-white rounded-lg shadow">
    <Icon src={Hashtag} class="w-6 h-6 mb-2 text-cyan-500" />
    <span class="font-medium">Indeks Episode</span>
  </a>
  <a href="/tokoh" class="p-4 bg-white rounded-lg shadow">
    <Icon src={Users} class="w-6 h-6 mb-2 text-cyan-500" />
    <span class="font-medium">Tokoh A-Z</span>
  </a>
</div>

<ContentWrapper>
  <h2 class="flex items-center mb-8">
    <Icon src={Sparkles} class="w-6 h-6 mr-2 text-cyan-500" />
    <span class="text-lg font-semibold font-serif">Episode Terbaru</span>
  </h2>

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
