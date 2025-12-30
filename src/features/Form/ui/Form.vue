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

const submit = () => {
  emit('submit', (data.value));
}

const cancel = () => {
  data.value = {};
}
</script>

<template>
  <q-form class="q-gutter-md" :class="$style['form']">
    <component 
      v-for="component in formComponents"
      :key="component.id"
      v-model="data[component.id as keyof typeof data]"
      :is="component.component" 
      v-bind="component.props" 
    />

    <div :class="$style['form__actions']">
      <Button label="Сохранить" color="primary" @click="submit" />

      <Button label="Отмена" @click="cancel" />
    </div>

    <div>
      <h3>
        Введенные данные
      </h3>
      {{ data }}
    </div>
  </q-form>
</template>

<style lang="scss" module>
.form {
  max-width: 800px;
  width: 100%;

  &__actions {
    display: flex;
    gap: design.$size-medium;
  }
}
</style>