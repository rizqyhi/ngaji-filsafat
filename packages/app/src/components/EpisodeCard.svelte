<script lang="ts">
  export let episode: number;
  export let title: string;
  export let topic: string;
  export let videoId: string;
</script>

<div class="flex mb-4">
  <div class="w-1/3 flex-none">
    <img
      src="https://img.youtube.com/vi/{videoId}/mqdefault.jpg"
      alt=""
      class="rounded-md object-cover w-full aspect-video"
    />
  </div>
  <div class="ml-4">
    <span
      class="px-2 py-1 rounded-md bg-orange-100 text-orange-600 text-xs font-medium tracking-wider"
      >#{episode}</span
    >
    <h4 class="mt-2 mb-1">{title}</h4>
    <span class="text-xs">Edisi: {topic}</span>
  </div>
</div>
