<script setup lang="ts">
import { withBase } from 'vitepress';
import { data as examples } from '../../../examples/examples.data';

// The Examples page: a card for each published example, a picture and a title and one line. The pictures are small images, made from the
// diagrams (see the README), so that the page loads fast and stacks to one column on a phone.
</script>

<template>
  <p v-if="examples.length === 0" class="gm-gallery-none">The first examples are on the way.</p>
  <ul v-else class="gm-gallery">
    <li v-for="e in examples" :key="e.url">
      <a class="gm-gallery-card" :href="withBase(e.url)">
        <img v-if="e.thumbnail" class="gm-gallery-thumb" :src="withBase(e.thumbnail)" :alt="e.title" width="960" height="600" loading="lazy" decoding="async" />
        <span class="gm-gallery-caption">
          <strong>{{ e.title }}</strong>
          <span v-if="e.tagline">{{ e.tagline }}</span>
        </span>
      </a>
    </li>
  </ul>
</template>
