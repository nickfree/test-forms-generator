export const userFormConfig = {
  fields: [
    {
      id: 'name',
      label: 'Имя',
      type: 'string'
    },
    {
      id: 'organization',
      label: 'Организация',
      type: 'select',
      options: ['Организация 1', 'Организация 2', 'Организация 3']
    },
    {
      id: 'comment',
      label: 'Комментарий',
      type: 'text'
    },
    {
      id: 'admin',
      label: 'Администратор',
      type: 'checkbox',
    }
  ],
}