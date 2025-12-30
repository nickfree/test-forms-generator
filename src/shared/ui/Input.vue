<script setup lang="ts">
interface Props {
  label?: string;
}

const props = defineProps<Props>();

const model = defineModel({
  default: ""
});
</script>

<template>
  <q-input v-model="model" :label="props.label" />
</template>

<style lang="scss" module>

</style>