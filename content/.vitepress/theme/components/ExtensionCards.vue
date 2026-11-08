<script setup lang="ts">
// The cards of the SQL extensions topic: one for each page of the topic. Add a card here when a page is written.
// The icons are from Tabler Icons (MIT license), drawn on a 24 by 24 grid.
interface Card {
  link: string;
  title: string;
  text: string;
  paths: string[];
}

const cards: Card[] = [
  {
    link: '/docs/sql-extensions/clusters/',
    title: 'Group rows into clusters',
    text: 'Put rows into boxes inside boxes, with two levels or with as many as the data has.',
    paths: ['M8 8h8v8h-8l0 -8', 'M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12'],
  },
  {
    link: '/docs/sql-extensions/enumerate/',
    title: 'Enumerate values',
    text: 'Make a row for every number in a range, to fill the gaps in a sequence of years or to build a timeline.',
    paths: [
      'M3 10l2 -2v8',
      'M9 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3',
      'M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5',
    ],
  },
  {
    link: '/docs/sql-extensions/iterate/',
    title: 'Iterate query results',
    text: 'Run a second query for each value a first query returns, to draw a group of rows for each year, department or customer.',
    paths: ['M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5', 'M3 16h18', 'M18 13l3 3l-3 3'],
  },
  {
    link: '/docs/sql-extensions/tree-query/',
    title: 'Walk a tree',
    text: 'Follow a hierarchy stored as rows, such as an org chart or a route map, down from a starting row, or up from it.',
    paths: [
      'M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0',
      'M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0',
      'M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0',
      'M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0',
      'M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0',
      'M5.058 18.306l2.88 -4.606',
      'M10.061 10.303l2.877 -4.604',
      'M10.065 13.705l2.876 4.6',
      'M15.063 5.7l2.881 4.61',
    ],
  },
];
</script>

<template>
  <div class="gm-cards">
    <a v-for="card in cards" :key="card.link" class="gm-card" :href="card.link">
      <span class="gm-card-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path v-for="d in card.paths" :key="d" :d="d" />
        </svg>
      </span>
      <span class="gm-card-text">
        <strong>{{ card.title }}</strong>
        <span>{{ card.text }}</span>
      </span>
    </a>
  </div>
</template>
