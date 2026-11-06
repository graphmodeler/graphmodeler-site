import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import Layout from './Layout.vue';
import ExampleDownload from './components/ExampleDownload.vue';
import ExampleDiagram from './components/ExampleDiagram.vue';
import ExampleKnowledgeViewer from './components/ExampleKnowledgeViewer.vue';
import ExampleList from './components/ExampleList.vue';
import ExampleMeta from './components/ExampleMeta.vue';
import './custom.css';

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  // The pieces an example page is made of (see templates/example.md and the Examples part of the README).
  enhanceApp({ app }) {
    app.component('ExampleDownload', ExampleDownload);
    app.component('ExampleDiagram', ExampleDiagram);
    app.component('ExampleKnowledgeViewer', ExampleKnowledgeViewer);
    app.component('ExampleList', ExampleList);
    app.component('ExampleMeta', ExampleMeta);
  },
};

export default theme;
