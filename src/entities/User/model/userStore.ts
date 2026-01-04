import { type IFormConfig } from 'src/shared';
import { UserApi } from '../api/userApi';
import type { IUserStoreState } from '../types';

export const userModule = {
  namespaced: true,

  state: (): IUserStoreState => ({
    userFormConfig: null,
    userData: {
      name: 'Никита',
      admin: true
    }
  }),

  mutations: {
    setUserFormConfig(state: IUserStoreState, userFormConfig: IFormConfig) {
      state.userFormConfig = userFormConfig;
    }
  },

  actions: {
    async getUserFormConfig({ state, commit }) {
      if (state.userFormConfig) {
        return;
      }

      commit('setUserFormConfig', (await UserApi.getFormConfig()));
    },

    async setUserData({ state }) {
      await UserApi.setUserData(state.userData);
    }
  }
}
