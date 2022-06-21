## H1

```css static
font-family: Museo Sans
font-size: 28px
line-height: 32px
font-weight: 900
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Heading size="1">Заголовок страницы</Heading>
      <Heading size="1" stub />
    </Spacer>
  </BlockContent>
</Block>
```

## H2

```css static
font-family: Museo Sans
font-size: 24px
line-height: 28px
font-weight: 900
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Heading size="2">Заголовок раздела</Heading>
      <Heading size="2" stub />
    </Spacer>
  </BlockContent>
</Block>
```

## H3

```css static
font-family: Museo Sans
font-size: 20px
line-height: 24px
font-weight: 900
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Heading size="3">Заголовок подраздела</Heading>
      <Heading size="3" stub />
    </Spacer>
  </BlockContent>
</Block>
```

## H4

```css static
font-family: Museo Sans
font-size: 16px
line-height: 20px
font-weight: 700
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Heading size="4">Заголовок блока</Heading>
      <Heading size="4" stub />
    </Spacer>
  </BlockContent>
</Block>
```

Задать максимальное количество видимых строк

```jsx
<Block>
  <BlockContent>
    <Heading size="4" clamp={4}>
      В типографических элементах есть возможность задавать максимальное
      количество видимых строк через свойство clamp. Если текст выходит за
      заданные рамки, в конце текста будет добавлено многоточие
    </Heading>
  </BlockContent>
</Block>
```
