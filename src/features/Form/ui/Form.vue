<script setup lang="ts">
import { computed } from 'vue';
import { 
  Input, 
  Button, 
  Select,
  Text,
  Checkbox,
  Icon,
  type IFieldConfig 
} from 'src/shared';

interface Props {
  config: IFieldConfig[]
}

const props = defineProps<Props>();
const emit = defineEmits(['submit']);
const data = defineModel({
  default: {}
});

const components = {
  string: Input,
  select: Select,
  text: Text,
  checkbox: Checkbox,
}

const formComponents = computed(() => props.config?.map((field) => {
  return {
    id: field.id,
    component: components[field.type as keyof typeof components],
    props: {
      label: field.label,
      options: field.options,
      icon: field.icon,
    }
  }
}) || []);

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
      :is="component.component"
      v-model="data[component.id as keyof typeof data]"
      :label="component.props?.label"
      :options="component.props?.options" 
    >
      <template v-if="component.props?.icon" #icon>
        <Icon :name="component.props.icon" />
      </template>
    </component>

    <div :class="$style['form__actions']">
      <Button label="Отмена" @click="cancel" />
      
      <Button label="Сохранить" color="primary" @click="submit" />
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
    justify-content: flex-end;
    gap: design.$size-medium;
  }
}
</style>