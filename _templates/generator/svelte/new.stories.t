---
to: src/components/svelte/<%= name %>/<%= name %>.stories.js
---
import <%= name %> from './<%= name %>.svelte';

export default {
  component: <%= name %>,
  title: '<%= name %>',
  excludeStories: /.*Data$/,
  argTypes: {
  },
};
const Template = ({ ...args }) => ({
  Component: <%= name %>,
  props: args,
});

export const Default = Template.bind({});