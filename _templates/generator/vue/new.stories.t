---
to: src/components/vue/<%= name %>/<%= name %>.stories.js
---
import <%= name %> from "./<%= name %>.vue";

export default {
    component: <%= name %>,
    title: "<%= name %>",
    tags: ["autodocs"],
    excludeStories: /.*Data$/,
};

export const Default = {};