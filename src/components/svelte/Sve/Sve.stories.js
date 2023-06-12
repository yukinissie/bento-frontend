import Sve from './Sve.svelte';

export default {
  component: Sve,
  title: 'Sve',
  excludeStories: /.*Data$/,
  argTypes: {
  },
};
const Template = ({ ...args }) => ({
  Component: Sve,
  props: args,
});

export const Default = Template.bind({});