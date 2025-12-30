<script setup lang="ts">
import { Form } from 'src/features/Form';
import { store } from 'src/shared';
import { computed } from 'vue';

const formConfig = computed(() => store.state.organizationModule.organizationFormConfig);

const getOrganizationFormConfig = async () => {
  await store.dispatch('organizationModule/getOrganizationFormConfig');
}

const setOrganizationData = async (data: any) => {
  await store.dispatch('organizationModule/setOrganizationData', data);
}

const init = async () => {
  await getOrganizationFormConfig();
}

init();
</script>

<template>
  <div>
    <Form v-if="formConfig" :config="formConfig?.fields" @submit="setOrganizationData" />
  </div>
</template>

<style lang="scss" module>

</style>