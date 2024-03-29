Title H1 и Title H2 применяются в качестве заголовков и подзаголовков на лендингах.

## Title 1

```css static
font-family: Museo Sans
font-size: 48px
line-height: 56px
font-weight: 900
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Title size="1">Title H1</Title>
      <Title size="1" stub />
    </Spacer>
  </BlockContent>
</Block>
```

## Title 2

```css static
font-family: Museo Sans
font-size: 40px
line-height: 48px
font-weight: 900
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Title size="2">Title H2</Title>
      <Title size="2" stub />
    </Spacer>
  </BlockContent>
</Block>
```

Задать максимальное количество видимых строк

```jsx
<Block>
  <BlockContent>
    <Title size="2" clamp={4}>
      В типографических элементах есть возможность задавать максимальное
      количество видимых строк через свойство clamp. Если текст выходит за
      заданные рамки, в конце текста будет добавлено многоточие
    </Title>
  </BlockContent>
</Block>
```
