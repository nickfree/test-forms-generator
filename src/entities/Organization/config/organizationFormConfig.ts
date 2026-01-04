import { type IFieldConfig } from "src/shared";

export const organizationFormConfig = {
  fields: [
    {
      id: 'name',
      label: 'Наименование',
      type: 'string',
      icon: "account_balance",
    },
    {
      id: 'comment',
      label: 'Комментарий',
      type: 'text',
      icon: "comment"
    },
  ] as IFieldConfig[],
}