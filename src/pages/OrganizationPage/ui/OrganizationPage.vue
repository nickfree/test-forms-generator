<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from 'src/shared';
import { Form } from 'src/features/Form';

const data = ref({});

const formConfig = computed(() => store.state.organizationModule.organizationFormConfig);

const getOrganizationFormConfig = async () => {
  await store.dispatch('organizationModule/getOrganizationFormConfig');
}

const setOrganizationData = async () => {
  await store.dispatch('organizationModule/setOrganizationData', data.value);
}

const init = async () => {
  await getOrganizationFormConfig();
}

init();
</script>

<template>
  <div :class="$style['organization-page']">
    <h1>Форма организации</h1>

    <Form 
      v-if="formConfig"
      v-model="data"
      :config="formConfig?.fields" 
      @submit="setOrganizationData" 
    />
  </div>
</template>

<style lang="scss" module>
.organization-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>