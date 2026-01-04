<script setup lang="ts">
import { useSlots } from 'vue';

interface Props {
  label?: string;
}

const props = defineProps<Props>();

const model = defineModel({
  default: ""
});

const slots = useSlots();
</script>

<template>
  <q-input v-model="model" :label="props.label">
    <template v-if="slots?.icon" #before>
      <slot name="icon" />
    </template>
  </q-input>
</template>

<style lang="scss" module>

</style>