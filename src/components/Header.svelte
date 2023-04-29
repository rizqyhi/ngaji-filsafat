<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import { ArrowSmallLeft } from "@steeze-ui/heroicons";

  export let title: string | undefined = undefined;
  export let backTo: string | undefined = undefined;
</script>

<div
  class="sticky top-0 z-0 h-24 px-4 py-6 bg-gradient-to-r from-cyan-300 to-teal-300"
>
  <div class="flex items-center">
    {#if backTo}
      <a href={backTo} class="mr-4 text-cyan-800">
        <Icon src={ArrowSmallLeft} class="w-6 h-6" />
      </a>
    {/if}

    {#if title}
      <h1 class="text-2xl font-medium text-blue-700 font-serif">
        {title}
      </h1>
    {/if}

    <slot />
  </div>
</div>
