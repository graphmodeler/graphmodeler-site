<script setup lang="ts">
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';

// The Knowledge Graph viewer of the app, with a published Knowledge Graph in it: raw and tree views, search, copy and save, and the counts of
// characters and estimated tokens. The pages are made by tools/make-knowledge-viewer.mjs in the app's repository, in a light and a dark theme,
// and put in content/public/examples/<name>/. The one that matches the site is shown. It is a page with a scroll of its own, so it is
// framed, as the app frames it: scripts and downloads allowed, and no access to this page.
const props = defineProps<{ light: string; dark: string; title: string; height?: number; caption?: string }>();
const { isDark } = useData();
const src = computed(() => withBase(isDark.value ? props.dark : props.light));
</script>

<template>
  <figure class="gm-viewer">
    <iframe :src="src" :title="title" :style="{ height: (height ?? 520) + 'px' }" loading="lazy" sandbox="allow-scripts allow-downloads"></iframe>
    <figcaption>
      <a class="gm-figure-button" :href="src" target="_blank" rel="noopener">Open the viewer on its own page</a>
      <span class="gm-figure-note">{{ caption ?? 'Raw and tree views, search, copy and save. It opens in a new tab.' }}</span>
    </figcaption>
  </figure>
</template>
