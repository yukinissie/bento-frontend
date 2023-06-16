---
to: src/components/solid/<%= name %>/<%= name %>.stories.js
---
/** @jsxImportSource solid */
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
