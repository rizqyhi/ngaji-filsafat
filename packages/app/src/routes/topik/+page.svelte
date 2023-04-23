<script lang="ts">
  import type { PageServerData } from "./$types";
  import Header from "../../components/Header.svelte";
  import ContentWrapper from "../../components/ContentWrapper.svelte";

  export let data: PageServerData;
</script>

<Header title="Topik A-Z" backTo="/" />

<ContentWrapper withoutPadding>
  <ul>
    {#each data.topics as topic}
      <li class="p-4 border-b">{topic}</li>
    {/each}
  </ul>
</ContentWrapper>
