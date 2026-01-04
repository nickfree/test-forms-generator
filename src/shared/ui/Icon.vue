<script setup lang="ts">
interface Props {
  name: string;
  size?: string;
  color?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <q-icon 
    :size="props.size || '22px'"
    :color="props.color || 'dark'"
    :name="props.name"
  />
</template>

<style lang="scss" module>

</style>