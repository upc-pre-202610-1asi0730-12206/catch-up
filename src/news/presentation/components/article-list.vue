<script setup lang="js">
import ArticleItem from "./article-item.vue";
import {toRefs} from "vue";

/**
 * Presentation component for rendering a collection of article cards.
 */

/**
 * @typedef {Object} ArticleListProps
 * @property {import('../../domain/model/article.entity.js').Article[]} articles
 */

/** @type {ArticleListProps} */
const props = defineProps({ articles: { type: Array, required: true } });
const { articles } = toRefs(props);

</script>

<template>
  <div v-for="article in articles">
    <article-item :article="article"/>
  </div>
</template>

<style scoped>

</style>