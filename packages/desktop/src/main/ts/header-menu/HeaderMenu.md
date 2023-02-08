```jsx
<Card bg="#fff" width={1} height={20} px={6}>
  <HeaderMenu
    data-testid="header-menu"
    children={[
      { href: `${location.href}?menu=1`, title: 'Платежи', active: true },
      { href: `${location.href}?menu=2`, title: 'Переводы', attention: true },
      { title: 'Пополнение кошелька', onClick: () => alert('Пополение') },
    ]}
  />
</Card>
```

```jsx
<Card bg="#fff" width={1} height={20} px={6}>
  <HeaderMenu data-testid="no" children={[]} stub={[32, 44, 26]} />
</Card>
```
