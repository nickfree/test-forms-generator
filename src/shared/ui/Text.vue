<script setup lang="ts">
import { useSlots } from 'vue';
import { Input } from '.';

const slots = useSlots();
</script>

<template>
  <Input autogrow>
    <template v-if="slots?.icon" #icon>
      <slot name="icon" />
    </template>
  </Input>
</template>

<style lang="scss" module>

</style>