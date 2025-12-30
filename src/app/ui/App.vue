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
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
