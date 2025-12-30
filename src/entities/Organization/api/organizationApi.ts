import { organizationFormConfig } from "../config"

export class OrganizationApi {

  // моковые данные, которые должен отдать бэк
  static async getFormConfig() {
    return organizationFormConfig;
  }

  static async setOrganizationData(data: any) {
    console.log(data);
  }
}