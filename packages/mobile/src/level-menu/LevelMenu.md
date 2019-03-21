## Level menu

Горизонтальное меню + вертикальное меню.

```jsx
class LevelMenuDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 't2',
    }
  }

  render() {
    return (
      <LevelMenu
        id="kassa-menus"
        selected={this.state.selected}
        onSelect={item => this.setState({selected: item.id})}
        items={[
          {
            title: 'Услуги',
            id: 'merchants',
            sub: [
              {
                title: 'Транзакции',
                id: 'transactions',
                sub: [
                  {
                    title: 'Что-то там 1',
                    id: 't1',
                  },
                  {
                    title: 'Что-то там 2',
                    id: 't2',
                  },
                ],
              },
              {
                title: 'Акты',
                id: 'reports',
              },
              {
                title: 'Реестры',
                id: 'registry',
              },
            ],
          },
          {
            title: 'Заявки',
            id: 'requests',
            sub: [
              {
                title: 'Список 1',
                id: 'list1',
              },
              {
                title: 'Список 2',
                id: 'list2',
              },
            ],
          },

          {
            title: 'Пользователи',
            id: 'users',
          },

          {
            title: 'Поддержка',
            id: 'support',
          },
        ]}
      />
    )
  }
}
;<Spacer size="xl">
  <LevelMenuDemo />
</Spacer>
```
