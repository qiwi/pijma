```jsx
initialState = {opened: []};
<Block>
  <BlockAccordion
    opened={state.opened}
    onChange={(opened) => setState({opened})}
    items={[
      {
        title: 'Заголовок 1',
        content: 'Для элементов рубрикации рекомендуем использовать стиль текста Body M 500 (Normal. Для основного текста — Body M 300 (Normal) в черном цвете.',
      },
      {
        title: 'Заголовок 2',
        content: 'Для элементов рубрикации рекомендуем использовать стиль текста Body M 500 (Normal. Для основного текста — Body M 300 (Normal) в черном цвете.',
      },
      {
        title: 'Заголовок 3',
        content: 'Для элементов рубрикации рекомендуем использовать стиль текста Body M 500 (Normal. Для основного текста — Body M 300 (Normal) в черном цвете.',
      },
    ]}
  />
</Block>
```

```jsx
initialState = {opened: [3]};
<Block>
  <BlockAccordion
    opened={state.opened}
    items={[]}
    stub
  />
</Block>
```
