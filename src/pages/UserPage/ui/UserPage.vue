<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from 'src/shared';
import { Form } from 'src/features/Form';

const data = ref({});

const formConfig = computed(() => store.state.userModule.userFormConfig);

const getUserFormConfig = async () => {
  await store.dispatch('userModule/getUserFormConfig');
}

const setUserData = async () => {
  await store.dispatch('userModule/setUserData', data.value);
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
      v-model="data"
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