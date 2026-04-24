<script setup>

</script>

<template>
  <pv-select-button v-model="$i18n.locale"
                    :options="$i18n.availableLocales">
    <template #option="slotProps">
      <span>{{ slotProps.option.toUpperCase() }}</span>
    </template>
  </pv-select-button>
</template>

<style scoped>

</style>