<script setup lang="ts">
import { Button } from 'src/shared';
</script>

<template>
  <nav :class="$style['main-menu']">
    <Button label="Форма пользователя" link="user" flat />

    <Button label="Форма организации" link="organization" flat />
  </nav>
</template>

<style lang="scss" module>
.main-menu {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}
</style>