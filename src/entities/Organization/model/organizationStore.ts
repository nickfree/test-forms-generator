import { OrganizationApi } from '../api/organizationApi';

export const organizationModule = {
  namespaced: true,

  state: () => ({
    organizationFormConfig: null,
    organizationData: {
      name: 'Моя организация',
      comment: 'Отличная организация. \nХороший выбор!',
    }
  }),

  mutations: {
    setOrganizationFormConfig(state: any, organizationFormConfig: any) {
      state.organizationFormConfig = organizationFormConfig;
    }
  },

  actions: {
    async getOrganizationFormConfig(state: any) {
      if (state.organizationFormConfig) {
        return;
      }

      state.commit('setOrganizationFormConfig', (await OrganizationApi.getFormConfig()));
    },

    async setOrganizationData(store: any) {
      await OrganizationApi.setOrganizationData(store.state.organizationData);
    }
  }
}
