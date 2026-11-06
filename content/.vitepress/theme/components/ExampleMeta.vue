<script setup lang="ts">
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';
import { audienceLabel, longDate } from '../examples-audiences';

// The line under the title of an example: who wrote it, when, and who it is for (each tag leads to the examples for that group).
const { frontmatter } = useData();
const date = computed(() => (frontmatter.value['date'] ? longDate(String(frontmatter.value['date'])) : ''));
const audience = computed<string[]>(() => frontmatter.value['audience'] ?? []);
</script>

<template>
  <p class="gm-example-meta gm-example-byline">
    <span>By Jeffrey J. Long</span>
    <span v-if="date">{{ date }}</span>
    <a v-for="key in audience" :key="key" class="gm-example-tag" :href="withBase('/examples/?audience=' + key)">{{ audienceLabel(key) }}</a>
  </p>
</template>
