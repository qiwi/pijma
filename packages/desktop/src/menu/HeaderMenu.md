```jsx
initialState = {active: 1};
<Card bg="#f5f5f5" p={4}>
  <Card bg="#fff" width={1} height={20} px={6}>
    <HeaderMenu
      items={[
        {id: 1, href: `${location.href}?menu=1`, title: 'Платежи'},
        {id: 2, href: `${location.href}?menu=2`, title: 'Переводы'},
        {id: 3, title: 'Пополнение кошелька'},
      ]}
      active={state.active}
      onChange={(active) => setState({active})}
    />
  </Card>
</Card>
```
