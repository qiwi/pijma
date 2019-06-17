```jsx
initialState = {opened: []};
<Card bg="#f5f5f5" p={4}>
  <Block>
    <BlockAccordion
      opened={state.opened}
      onChange={(opened) => setState({opened})}
      items={[
        {
          title: 'Рубрикатор 1',
          content:
            'Для элементов рубрикации рекомендуем использовать стиль текста Body M 500 (Normal. Для основного текста — Body M 300 (Normal) в черном цвете.',
        },
        {
          title: 'Рубрикатор 2',
          content:
            'Для элементов рубрикации рекомендуем использовать стиль текста Body M 500 (Normal. Для основного текста — Body M 300 (Normal) в черном цвете.',
        },
        {
          title: 'Рубрикатор 3',
          content:
            'Для элементов рубрикации рекомендуем использовать стиль текста Body M 500 (Normal. Для основного текста — Body M 300 (Normal) в черном цвете.',
        },
      ]}
    />
  </Block>
</Card>
```
