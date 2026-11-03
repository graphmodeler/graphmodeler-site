<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { withBase } from 'vitepress';

const { Layout } = DefaultTheme;

// Where someone who followed a bad address most likely wanted to go.
const places = [
  { text: 'Documentation', link: '/docs/', note: 'How every tab of the app works' },
  { text: 'Getting started', link: '/docs/getting-started/', note: 'Build a first graph in a few minutes' },
  { text: 'Download', link: '/download/', note: 'Windows, macOS and Linux' },
  { text: 'Pricing', link: '/pricing/', note: 'Free for personal use; the commercial license' },
  { text: 'Support', link: '/support/', note: 'Common questions, and how to write to me' },
];
</script>

<template>
  <Layout>
    <template #not-found>
      <div class="gm-not-found">
        <p class="gm-not-found-code">404</p>
        <h1 class="gm-not-found-title">That page is not here</h1>
        <p class="gm-not-found-text">
          The address may have been typed wrongly, or the page may have moved. These are the places people usually want.
        </p>
        <ul class="gm-not-found-links">
          <li v-for="place in places" :key="place.link">
            <a :href="withBase(place.link)">{{ place.text }}</a>
            <span>{{ place.note }}</span>
          </li>
        </ul>
        <p class="gm-not-found-text">
          Or use <strong>Search</strong> at the top of the page, or <a :href="withBase('/')">start from the home page</a>.
        </p>
      </div>
    </template>
  </Layout>
</template>
