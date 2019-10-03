### Without radius

```jsx
<Block>
  <BlockContent>
    <MenuItem href="/" text="Проверить платеж по квитанции" flat/>
    <MenuItem href="/" text="Обратиться в поддержку" flat/>
    <MenuItem href="/" text="Вопросы и ответы" flat/> 
  </BlockContent>
</Block>
```

### With radius

```jsx
<Block>
  <BlockContent>
    <Flex justify="space-between">
      <MenuItem href="/" text="Переводы между кошельками" icon={<Icon name="wallet" size={8}/>}/>
      <MenuItem href="/" text="Переводы на карту" icon={<Icon name="card" size={8}/>}/>
      <MenuItem href="/" text="Мобильная связь" icon={<Icon name="phone" size={8}/>}/>
    </Flex>
  </BlockContent>
</Block>
```
