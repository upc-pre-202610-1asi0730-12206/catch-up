<script setup lang="js">
import {Source} from "../../domain/model/source.entity.js";
import SourceItem from "./source-item.vue";
import {toRefs} from "vue";

/**
   * Presentation component that displays selectable news sources.
   *
   * @remarks
   * It surfaces user interactions to parent components without mutating
   * application state directly.
   */

  /**
   * @typedef {Object} SourceListProps
   * @property {boolean} visible
   * @property {Source[]} sources
   */

  /**
   * @typedef {Object} SourceListEmits
   * @property {(event: 'source-selected', source: Source) => void} emit
   */

  /** @type {SourceListProps} */
  const props = defineProps({ visible: Boolean, sources: Array[Source] });
  /** @type {SourceListEmits['emit']} */
  const emit  = defineEmits(['source-selected']);

  /**
   * Bubbles the selected source to the parent container.
   *
   * @param {Source} source
   * @returns {void}
   */
  function emitSourceSelectedEvent(source) {
    emit('source-selected', source);
  }

  const { visible, sources } = toRefs(props);
</script>

<template>
  <pv-drawer v-bind:visible="visible">
    <source-item v-for="source in sources"
                 :key="source.id"
                 :source="source"
                 @source-selected="emitSourceSelectedEvent(source)"/>
  </pv-drawer>
</template>

<style scoped>

</style>