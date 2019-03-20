## Select menu

Вертикальное меню, похожее на dropdown. Используется как второй уровень.

```jsx
class SelectMenuDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      activeId: 'transactions',
    }
  }

  render() {
    return (
      <SelectMenu
        id="kassa-menu-second"
        activeId={this.state.activeId}
        onClick={item => this.setState({activeId: item.id})}
        items={[
          {
            title: 'Транзакции и отчеты',
            id: 'transactions',
          },
          {
            title: 'Реестры',
            id: 'registry',
          },

          {
            title: 'Акты',
            id: 'reports',
          },
        ]}
      />
    )
  }
}
;<Spacer size="xl">
  <SelectMenuDemo />
</Spacer>
```
