```jsx
initialState = {active: 'https://qiwi.com/payment'};
<Card bg="#f5f5f5" p={4}>
  <Card bg="#fff" width={1} height={20} px={6}>
    <HeaderMenu
      items={[
        {href: 'https://qiwi.com/payment', title: 'Платежи', target:"_blank"},
        {href: 'https://qiwi.com/transfer', title: 'Переводы', target:"_blank"},
        {href: 'https://qiwi.com/replenish', title: 'Пополнение кошелька', target:"_blank"},
      ]}
      active={state.active}
      onChange={(active) => setState({active})}
    />
  </Card>
</Card>
```
