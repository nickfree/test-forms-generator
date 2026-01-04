import { type IFormConfig } from "src/shared";

export interface IOrganizationStoreState {
  organizationFormConfig: null | IFormConfig,
  organizationData: {
    [key: string]: any;
  }
}