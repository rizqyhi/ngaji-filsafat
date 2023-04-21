<script>
  import { page } from "$app/stores";
  import ContentWrapper from "../components/ContentWrapper.svelte";
  import Header from "../components/Header.svelte";
</script>

<Header />
<ContentWrapper>
  <div class="py-16 text-center">
    <h1 class="mb-8 text-6xl">:(</h1>
    <p>{$page.status} {$page.error?.message}</p>
  </div>
</ContentWrapper>
