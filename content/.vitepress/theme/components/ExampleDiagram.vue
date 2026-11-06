<script setup lang="ts">
import { withBase } from 'vitepress';

// A diagram made by Graph Modeler, shown as a plain picture with a button that opens the interactive version on a page of its own.
// `image` is the SVG as Graphviz drew it (no script), so it loads fast, fits any width and has alt text; `interactive` is the same
// diagram published with SVG post-processing (zoom, pan, filters, hover), which needs the whole window, so it is not shown in a frame.
// Both files are put in content/public/examples/<name>/.
defineProps<{ image: string; interactive: string; alt: string; caption?: string }>();
</script>

<template>
  <figure class="gm-diagram">
    <a class="gm-diagram-picture" :href="withBase(interactive)" target="_blank" rel="noopener" :aria-label="'Open the interactive diagram: ' + alt">
      <img :src="withBase(image)" :alt="alt" loading="lazy" decoding="async" />
    </a>
    <figcaption>
      <a class="gm-figure-button" :href="withBase(interactive)" target="_blank" rel="noopener">Open the interactive diagram</a>
      <span class="gm-figure-note">{{ caption ?? 'Zoom, pan, filter and hover over a box for its details. It opens in a new tab.' }}</span>
    </figcaption>
  </figure>
</template>
