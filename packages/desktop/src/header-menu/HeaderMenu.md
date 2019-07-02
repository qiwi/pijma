```jsx
<Card bg="#f5f5f5" p={4}>
  <Card bg="#fff" width={1} height={20} px={6}>
    <HeaderMenu
      children={[
        {href: `${location.href}?menu=1`, title: 'Платежи', active: true},
        {href: `${location.href}?menu=2`, title: 'Переводы'},
        {title: 'Пополнение кошелька', onClick: () => alert('Пополение')},
      ]}
    />
  </Card>
</Card>
```
