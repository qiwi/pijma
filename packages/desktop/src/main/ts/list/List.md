## Нумерованный

```jsx
<Block>
  <BlockContent>
    <List
      data-testid="list"
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
        'Элемент списка 10',
      ]}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <List data-testid="list" type="number" children={[]} stub />
  </BlockContent>
</Block>
```

## Маркированный

```jsx
<Block>
  <BlockContent>
    <List
      data-testid="list"
      type="bullet"
      children={['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3']}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <List data-testid="list" type="bullet" children={[]} stub />
  </BlockContent>
</Block>
```

## Степпер

```jsx
<Block>
  <BlockContent>
    <List
      data-testid="list"
      type="step"
      children={['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3']}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <List data-testid="no" type="step" children={[]} stub />
  </BlockContent>
</Block>
```
