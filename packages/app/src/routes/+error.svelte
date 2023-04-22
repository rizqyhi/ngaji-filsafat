<script>
  import { page } from "$app/stores";
  import ContentWrapper from "../components/ContentWrapper.svelte";
  import Header from "../components/Header.svelte";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Home } from "@steeze-ui/heroicons";
</script>

<svelte:head>
  <title>{$page.error?.message} - Ngaji Filsafat</title>
</svelte:head>

<Header />
<ContentWrapper>
  <div class="py-16 text-center">
    <h1 class="mb-6 text-6xl">:(</h1>
    <div class="mb-16">{$page.status} {$page.error?.message}</div>

    <a href="/" class="inline-flex items-center mx-auto">
      <Icon src={Home} class="w-4 h-4 mr-2" />
      Kembali ke beranda
    </a>
  </div>
</ContentWrapper>
