import { UserApi } from '../api/userApi';

export const userModule = {
  namespaced: true,

  state: () => ({
    userFormConfig: null,
    userData: {
      name: 'Никита',
      admin: true
    }
  }),

  mutations: {
    setUserFormConfig(state: any, userFormConfig: any) {
      state.userFormConfig = userFormConfig;
    }
  },

  actions: {
    async getUserFormConfig(state: any) {
      if (state.userFormConfig) {
        return;
      }

      state.commit('setUserFormConfig', (await UserApi.getFormConfig()));
    },

    async setUserData(store: any) {
      await UserApi.setUserData(store.state.userData);
    }
  }
}
