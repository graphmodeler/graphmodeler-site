<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { withBase } from 'vitepress';
import { data as examples } from '../../../examples/examples.data';
import { AUDIENCES, audienceLabel, longDate } from '../examples-audiences';

// Which group is shown: all, or the one named in the address (?audience=architects), which the tags of an example link to.
const chosen = ref('');
onMounted(() => {
  const asked = new URLSearchParams(window.location.search).get('audience') ?? '';
  if (AUDIENCES.some((a) => a.key === asked)) chosen.value = asked;
});

const shown = computed(() => (chosen.value ? examples.filter((e) => e.audience.includes(chosen.value)) : examples));

function choose(key: string) {
  chosen.value = key;
  const url = new URL(window.location.href);
  if (key) url.searchParams.set('audience', key);
  else url.searchParams.delete('audience');
  window.history.replaceState(null, '', url);
}
</script>

<template>
  <div class="gm-examples">
    <div class="gm-example-filter" role="group" aria-label="Show examples for">
      <button type="button" :class="{ on: chosen === '' }" :aria-pressed="chosen === ''" @click="choose('')">All</button>
      <button
        v-for="a in AUDIENCES"
        :key="a.key"
        type="button"
        :class="{ on: chosen === a.key }"
        :aria-pressed="chosen === a.key"
        @click="choose(a.key)"
      >
        {{ a.label }}
      </button>
    </div>

    <p v-if="examples.length === 0" class="gm-example-none">The first examples are on the way.</p>
    <p v-else-if="shown.length === 0" class="gm-example-none">Nothing here yet for this group. <a href="#" @click.prevent="choose('')">Show all examples</a>.</p>

    <ul v-else class="gm-example-cards">
      <li v-for="e in shown" :key="e.url" class="gm-example-card">
        <a class="gm-example-title" :href="withBase(e.url)">{{ e.title }}</a>
        <p class="gm-example-description">{{ e.description }}</p>
        <p class="gm-example-meta">
          <span>{{ longDate(e.date) }}</span>
          <span v-for="key in e.audience" :key="key" class="gm-example-tag">{{ audienceLabel(key) }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
