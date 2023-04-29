<script lang="ts">
  import { Icon } from "@steeze-ui/svelte-icon";
  import { ArrowSmallLeft } from "@steeze-ui/heroicons";

  export let title: string | undefined = undefined;
  export let backTo: string | undefined = undefined;
</script>

<div
  class="sticky top-0 z-0 h-24 px-4 py-6 bg-gradient-to-r from-cyan-500 to-teal-400"
>
  <div class="flex items-center">
    {#if backTo}
      <a href={backTo} class="mr-4 text-cyan-800">
        <Icon src={ArrowSmallLeft} class="w-6 h-6" />
      </a>
    {/if}

    {#if title}
      <h1 class="text-lg font-medium text-white truncate">
        {title}
      </h1>
    {/if}

    <slot />
  </div>
</div>
