<script setup lang="ts">
interface Props {
  label?: string;
  options?: string[];
}

const props = defineProps<Props>();

const model = defineModel({
  default: ""
});
</script>

<template>
  <q-select v-model="model" :label="props.label" :options="props.options" />
</template>

<style lang="scss" module>

</style>