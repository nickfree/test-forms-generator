<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Props {
  label?: string;
  color?: 'primary' | 'secondary' | 'accent';
  link?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['click']);

const router = useRouter();

const onClick = () => {
  if (props.link) {
    router.push(`/${props.link}`);
  }

  emit('click');
}
</script>

<template>
  <q-btn :label="props.label" :color="props.color" @click="onClick" />
</template>

<style lang="scss" module>

</style>