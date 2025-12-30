import { OrganizationApi } from '../api/organizationApi';

export const organizationModule = {
  namespaced: true,

  state: () => ({
    organizationFormConfig: null,
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

    async setOrganizationData(state: any, data: any) {
      await OrganizationApi.setOrganizationData(data);
    }
  }
}
