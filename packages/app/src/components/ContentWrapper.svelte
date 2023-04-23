<script lang="ts">
  export let withoutPadding = false;
</script>

<div
  class="h-full py-8 relative z-10 bg-white rounded-t-3xl -top-6"
  class:px-4={!withoutPadding}
>
  <slot />
</div>
