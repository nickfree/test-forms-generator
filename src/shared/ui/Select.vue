<script setup lang="ts">
import { useSlots } from 'vue';

interface Props {
  label?: string;
  options?: string[];
}

const props = defineProps<Props>();

const model = defineModel({
  default: ""
});

const slots = useSlots();
</script>

<template>
  <q-select v-model="model" :label="props.label" :options="props.options">
    <template v-if="slots?.icon" #before>
      <slot name="icon" />
    </template>
  </q-select>
</template>

<style lang="scss" module>

</style>