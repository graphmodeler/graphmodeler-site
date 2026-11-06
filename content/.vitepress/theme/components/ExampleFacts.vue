<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

// A line of small facts under the title of an example (its numbers and its layout), from `facts` in its front matter.
const { frontmatter } = useData();
const facts = computed<string[]>(() => frontmatter.value['facts'] ?? []);
</script>

<template>
  <ul v-if="facts.length" class="gm-facts">
    <li v-for="fact in facts" :key="fact">{{ fact }}</li>
  </ul>
</template>
