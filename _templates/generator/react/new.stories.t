---
to: src/components/react/<%= name %>/<%= name %>.stories.js
---
/** @jsxImportSource react */
import { <%= name %> } from './<%= name %>';
export default {
  title: 'Example/<%= name %>',
  component: <%= name %>,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export const Default = {};
