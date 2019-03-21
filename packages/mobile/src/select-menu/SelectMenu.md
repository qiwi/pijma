## Select menu

Вертикальное меню, похожее на dropdown. Используется как второй уровень.

```jsx
class SelectMenuDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: 'transactions',
    }
  }

  render() {
    return (
      <SelectMenu
        id="kassa-menu-second"
        selected={this.state.selected}
        onSelect={item => this.setState({selected: item.id})}
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
