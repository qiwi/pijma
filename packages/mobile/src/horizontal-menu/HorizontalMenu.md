## Horizontal menu

Горизонтальное меню с прокруткой через touch-события. Используется как первый уровень меню.

```jsx
class HorizontalMenuDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      activeId: 'requests',
    }
  }

  render() {
    return (
      <HorizontalMenu
        id="kassa-menu-first"
        activeId={this.state.activeId}
        onClick={item => this.setState({activeId: item.id})}
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
