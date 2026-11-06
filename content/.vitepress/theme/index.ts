import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import Layout from './Layout.vue';
import ExampleDownload from './components/ExampleDownload.vue';
import ExampleDiagram from './components/ExampleDiagram.vue';
import ExampleFacts from './components/ExampleFacts.vue';
import ExampleGallery from './components/ExampleGallery.vue';
import ExampleKnowledgeViewer from './components/ExampleKnowledgeViewer.vue';
import './custom.css';

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  // The pieces an example page is made of (see templates/example.md and the Examples part of the README).
  enhanceApp({ app }) {
    app.component('ExampleDownload', ExampleDownload);
    app.component('ExampleDiagram', ExampleDiagram);
    app.component('ExampleFacts', ExampleFacts);
    app.component('ExampleGallery', ExampleGallery);
    app.component('ExampleKnowledgeViewer', ExampleKnowledgeViewer);
  },
};

export default theme;
