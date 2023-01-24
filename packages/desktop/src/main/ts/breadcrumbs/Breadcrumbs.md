```jsx
<Spacer size="xl">
  <Breadcrumbs
    data-testid="breadcrumbs"
    children={[
      { href: 'https://qiwi.com/', children: 'Главная' },
      { href: 'https://qiwi.com/support/', children: 'Помощь' },
      {
        href: 'https://qiwi.com/support/information',
        children: 'Информация о кошельке',
      },
    ]}
  />
  <Breadcrumbs data-testid="no" stub />
</Spacer>
```
