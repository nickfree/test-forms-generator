<script setup lang="ts">
import { Form } from 'src/features/Form';
import { store } from 'src/shared';
import { computed } from 'vue';

const formConfig = computed(() => store.state.userModule.userFormConfig);

const getUserFormConfig = async () => {
  await store.dispatch('userModule/getUserFormConfig');
}

const setUserData = async (data: any) => {
  await store.dispatch('userModule/setUserData', data);
}

const init = async () => {
  await getUserFormConfig();
}

init();
</script>

<template>
  <div :class="$style['user-page']">
    <h1>Форма пользователя</h1>

    <Form 
      v-if="formConfig" 
      :config="formConfig?.fields" 
      @submit="setUserData" 
    />
  </div>
</template>

<style lang="scss" module>
.user-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>