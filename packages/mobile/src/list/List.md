## Нумерованный

```jsx
<Block>
  <BlockContent>
    <List
      type="number"
      children={[
        'Элемент списка 1',
        'Элемент списка 2',
        'Элемент списка 3',
        'Элемент списка 4',
        'Элемент списка 5',
        'Элемент списка 6',
        'Элемент списка 7',
        'Элемент списка 8',
        'Элемент списка 9',
        'Элемент списка 10'
      ]}
    />
  </BlockContent>
</Block>
```

## Маркированный

```jsx
<Block>
  <BlockContent>
    <List
      type="bullet"
      children={['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3']}
    />
  </BlockContent>
</Block>
```

## Степпер

```jsx
<Block>
  <BlockContent>
    <List
      type="step"
      children={['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3']}
    />
  </BlockContent>
</Block>
```
