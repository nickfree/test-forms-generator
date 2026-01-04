import { type IFormConfig } from "src/shared"

export interface IUserStoreState {
  userFormConfig: null | IFormConfig,
  userData: {
    [key: string]: any;
  }
}