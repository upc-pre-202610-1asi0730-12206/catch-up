<script setup>
import {ref} from "vue";
import LanguageSwitcher from "./language-switcher.vue";
import FooterContent from "./footer-content.vue";

const drawerVisible = ref(false);
const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value
};
</script>

<template>
  <div>
    <div>
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" @click="toggleDrawer" label="CatchUp" text/>
          <!-- Add Source List here -->
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    <!-- Add Article List here -->
    <!-- Unavailable Content Component here -->
  </div>
  <footer-content/>
</template>

<style scoped>

</style>