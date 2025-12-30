<script setup lang="ts">
import { computed, ref } from 'vue';
import { 
  Input, 
  Button, 
  Select,
  Text,
  Checkbox,
  type IFieldConfig 
} from 'src/shared';

interface Props {
  config: IFieldConfig[]
}

const props = defineProps<Props>();
const emit = defineEmits(['submit']);

const components = {
  string: Input,
  select: Select,
  text: Text,
  checkbox: Checkbox,
}

const data = ref({});

const formComponents = computed(() => props.config?.map((field) => {
  return {
    id: field.id,
    component: components[field.type as keyof typeof components],
    props: {
      label: field.label,
      options: field.options
    }
  }
}) || [])

const onClick = () => {
  emit('submit', (data.value));
}
</script>

<template>
  <q-form class="q-gutter-md">
    <component 
      v-for="component in formComponents"
      :key="component.id"
      v-model="data[component.id as keyof typeof data]"
      :is="component.component" 
      v-bind="component.props" 
    />

    <div>
      <Button label="Сохранить" color="primary" @click="onClick" />
    </div>
  </q-form>
</template>

<style lang="scss" module>

</style>