import { type IFormConfig } from 'src/shared';
import type { IOrganizationStoreState } from '../types';
import { OrganizationApi } from '../api/organizationApi';

export const organizationModule = {
  namespaced: true,

  state: (): IOrganizationStoreState => ({
    organizationFormConfig: null,
    organizationData: {
      name: 'Моя организация',
      comment: 'Отличная организация. \nХороший выбор!',
    }
  }),

  mutations: {
    setOrganizationFormConfig(state: IOrganizationStoreState, organizationFormConfig: IFormConfig) {
      state.organizationFormConfig = organizationFormConfig;
    }
  },

  actions: {
    async getOrganizationFormConfig({ state, commit }) {
      if (state.organizationFormConfig) {
        return;
      }

      commit('setOrganizationFormConfig', (await OrganizationApi.getFormConfig()));
    },

    async setOrganizationData({ state }) {
      await OrganizationApi.setOrganizationData(state.organizationData);
    }
  }
}
