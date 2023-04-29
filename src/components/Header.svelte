<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import { ArrowSmallLeft } from "@steeze-ui/heroicons";

  export let title: string | undefined = undefined;
  export let backTo: string | undefined = undefined;
</script>

<div
  class="sticky top-0 z-0 min-h-24 px-4 pt-6 py-12 bg-gradient-to-r from-cyan-300 to-teal-300"
>
  {#if backTo}
    <div class="mb-6">
      <a href={backTo} class="text-white">
        <Icon src={ArrowSmallLeft} class="w-6 h-6" />
      </a>
    </div>
  {/if}

  {#if title}
    <h1 class="text-2xl font-medium text-blue-700 font-serif">
      {title}
    </h1>
  {/if}

  <slot />
</div>
