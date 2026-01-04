import { type IFieldConfig } from "src/shared";

export const userFormConfig = {
  fields: [
    {
      id: 'name',
      label: 'Имя',
      type: 'string',
      icon: 'account_circle',
    },
    {
      id: 'organization',
      label: 'Организация',
      type: 'select',
      options: ['Организация 1', 'Организация 2', 'Организация 3'],
      icon: "account_balance"
    },
    {
      id: 'comment',
      label: 'Комментарий',
      type: 'text',
      icon: "comment"
    },
    {
      id: 'admin',
      label: 'Администратор',
      type: 'checkbox',
      icon: "shield"
    }
  ] as IFieldConfig[],
}