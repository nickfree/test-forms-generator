<script setup lang="ts">
import { useSlots } from 'vue';

interface Props {
  label?: string;
}

const props = defineProps<Props>();

const model = defineModel({
  default: false
});

const slots = useSlots();
</script>

<template>
  <div>
    <slot v-if="slots?.icon" name="icon" />

    <q-checkbox v-model="model" :label="props.label" />
  </div>
</template>

<style lang="scss" module>

</style>