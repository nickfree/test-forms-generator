import { userFormConfig } from "../config"

export class UserApi {

  // моковые данные, которые должен отдать бэк
  static async getFormConfig() {
    return userFormConfig;
  }

  static async setUserData(data: any) {
    console.log(data);
  }
}