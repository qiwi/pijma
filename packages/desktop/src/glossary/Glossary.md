```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem width={0.5}>
        <Glossary
          children={[
            { title: 'Title 1', content: 'Text 1' },
            { title: 'Title 2', content: 'Text 2' },
            { title: 'Title 3', content: 'Text 3' },
          ]}
        />
      </FlexItem>
      <FlexItem width={0.5}>
        <Glossary
          stub
          children={[
            { title: 'title', content: 'content' },
            { title: 'title', content: 'content' },
            { title: 'title', content: 'content' },
          ]}
        />
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem width={0.5}>
        <Glossary
          children={[
            { title: 'Допустимый остаток на балансе', content: 'До 15 000 ₽' },
            {
              title: 'Платежи и переводы',
              content: [
                'До 40 000 ₽ в месяц',
                'Из них не более 5 000 ₽ на банковские карты, счета и кошельки других систем',
                'Не более 15 000 ₽ на другие QIWI Кошельки',
              ],
            },
            {
              title: 'Допустимая сумма на одну операцию',
              content: 'До 15 000 ₽',
            },
            { title: 'Снятие наличных с карт QIWI', content: 'До 15 000 ₽' },
          ]}
        />
      </FlexItem>
      <FlexItem width={0.5}>
        <Glossary
          stub
          children={[
            { title: 'title', content: 'content' },
            {
              title: 'title',
              content: ['content', 'content', 'content'],
            },
            { title: 'title', content: 'content' },
            { title: 'title', content: 'content' },
          ]}
        />
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```
