```jsx
<Block>
  <BlockContent>
    <Glossary children={[
      {title: 'Title 1', content: 'Text 1'}, 
      {title: 'Title 2', content: 'Text 2'}, 
      {title: 'Title 3', content: 'Text 3'}
    ]}/>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Glossary children={[
      {title: 'Допустимый остаток на балансе', content: 'До 15 000 ₽'}, 
      {
        title: 'Платежи и переводы', 
        content: [
          'До 40 000 ₽ в месяц',
          'Из них не более 5 000 ₽ на банковские карты, счета и кошельки других систем',
          'Не более 15 000 ₽ на другие QIWI Кошельки'
        ]
      }, 
      {title: 'Допустимая сумма на одну операцию', content: 'До 15 000 ₽'},
      {title: 'Снятие наличных с карт QIWI', content: 'До 15 000 ₽'}
    ]}/>
  </BlockContent>
</Block>
```
