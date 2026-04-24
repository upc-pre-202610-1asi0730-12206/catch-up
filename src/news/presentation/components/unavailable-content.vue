<script setup lang="js">
import {useI18n} from "vue-i18n";
import {toRefs} from "vue";

/**
   * Presentation fallback component for infrastructure/application errors.
   */

  /**
   * @typedef {Object} UnavailableContentProps
   * @property {Array<unknown>} errors
   */

  const { t } = useI18n();

  /** @type {UnavailableContentProps} */
  const props = defineProps({ errors: null});
  const { errors } = toRefs(props);
</script>

<template>
  <div>
    <div><h4>{{ t('unavailable-news') }}</h4></div>
    <div v-for="error in errors">
      <h6>{{ error }}</h6>
    </div>
  </div>
</template>

<style scoped>

</style>