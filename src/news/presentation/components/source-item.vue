<script setup lang="js">
import {Source} from "../../domain/model/source.entity.js";
import {toRefs} from "vue";

/**
   * Presentation component for a single source option.
   *
   * @remarks
   * This component emits user intent; source selection state is managed in
   * the application layer.
   */

  /**
   * @typedef {Object} SourceItemProps
   * @property {Source} source
   */

  /**
   * @typedef {Object} SourceItemEmits
   * @property {(event: 'source-selected', source: Source) => void} emit
   */

  /** @type {SourceItemProps} */
  const props = defineProps({ source: { type: Source, required: true } });
  /** @type {SourceItemEmits['emit']} */
  const emit  = defineEmits(['source-selected']);

  const { source } = toRefs(props);

  /**
   * Emits selected source to the parent component.
   *
   * @returns {void}
   */
  function emitSourceSelectedEvent() {
    emit('source-selected', props.source);
  }
</script>

<template>
  <div class="m-4">
    <div @click="emitSourceSelectedEvent" class="flex align-content-start flex-wrap">
    <span  class="flex align-items-center justify-content-center mr-2">
          <pv-avatar :aria-label="source.name"
                     :image="source.urlToLogo"
                     shape="circle"/>
    </span>
      <span  class="flex align-items-center justify-content-center">
          {{source.name}}
    </span>
    </div>
  </div>
</template>

<style scoped>

</style>