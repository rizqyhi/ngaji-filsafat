<script>
  import { page } from "$app/stores";
  import "../app.css";
</script>

<svelte:head>
  <title>{$page.data.title ?? "Ngaji Filsafat"}</title>
</svelte:head>

<div class="max-w-lg min-h-full mx-auto bg-white">
  <slot />
</div>
