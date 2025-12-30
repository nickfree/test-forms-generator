<script setup lang="ts">
import { MainMenu } from 'src/features/MainMenu';
</script>

<template>
  <div :class="$style['app']">
    <MainMenu />
    
    <RouterView />
  </div>
</template>

<style lang="scss" module>
.app {
  padding: design.$size-medium;
  display: flex;
  flex-direction: column;
  gap: design.$size-medium;

  h1 {
    font-size: design.$size-xx-large;
  }

  h2 {
    font-size: design.$size-x-large;
  }

  h3 {
    font-size: design.$size-large;
  }
}
</style>
