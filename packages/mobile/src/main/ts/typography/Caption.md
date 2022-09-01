```css static
font-family: Museo Sans
font-size: 14px
line-height: 20px
font-weight: 700
letter-spacing: 1.5
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Caption>Caption Gray</Caption>
      <Caption color="default">Caption Black</Caption>
      <Caption stub />
    </Spacer>
  </BlockContent>
</Block>
```

Задать максимальное количество видимых строк

```jsx
<Block>
  <BlockContent>
    <Caption clamp={4}>
      В типографических элементах есть возможность задавать максимальное
      количество видимых строк через свойство clamp. Если текст выходит за
      заданные рамки, в конце текста будет добавлено многоточие
    </Caption>
  </BlockContent>
</Block>
```
