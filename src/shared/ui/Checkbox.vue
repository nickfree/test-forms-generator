<script setup lang="ts">
interface Props {
  label?: string;
}

const props = defineProps<Props>();

const model = defineModel({
  default: false
});
</script>

<template>
  <q-checkbox v-model="model" :label="props.label" />
</template>

<style lang="scss" module>

</style>