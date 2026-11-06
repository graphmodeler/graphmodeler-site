<script setup lang="ts">
// The box at the end of an example: the files to download and open in Graph Modeler. The file is put in content/public/examples/<name>/.
defineProps<{ file: string; label?: string; size?: string }>();
</script>

<template>
  <div class="gm-download">
    <div>
      <strong>{{ label ?? 'Download the project' }}</strong>
      <p><slot>The project and its data, to open in Graph Modeler.</slot></p>
    </div>
    <a class="gm-download-button" :href="file" download>Download<span v-if="size"> ({{ size }})</span></a>
  </div>
</template>
