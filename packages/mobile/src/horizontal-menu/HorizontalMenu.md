## Horizontal menu

Горизонтальное меню с прокруткой через touch-события. Используется как первый уровень меню.

```jsx
class HorizontalMenuDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 'requests',
    }
  }

  render() {
    return (
      <HorizontalMenu
        id="kassa-menu-first"
        selected={this.state.selected}
        onSelect={item => this.setState({selected: item.id})}
        items={[
          {
            title: 'Услуги',
            id: 'merchants',
          },
          {
            title: 'Заявки',
            id: 'requests',
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
  <HorizontalMenuDemo />
</Spacer>
```
