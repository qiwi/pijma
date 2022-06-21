## L

```css static
font-family: Museo Sans
font-size: 20px
line-height: 32px
font-weight: 300
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Paragraph size="l">Paragraph L Black</Paragraph>
      <Paragraph size="l" color="support">
        Paragraph 20px Gray
      </Paragraph>
      <Paragraph size="l" stub />
    </Spacer>
  </BlockContent>
</Block>
```

## M

```css static
font-family: Museo Sans
font-size: 16px
line-height: 24px
font-weight: 300
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Paragraph size="m">Paragraph M Black</Paragraph>
      <Paragraph size="m" color="support">
        Paragraph M Gray
      </Paragraph>
      <Paragraph size="m" stub />
    </Spacer>
  </BlockContent>
</Block>
```

## S

```css static
font-family: Museo Sans
font-size: 14px
line-height: 20px
font-weight: 300
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Paragraph size="s">Paragraph S Black</Paragraph>
      <Paragraph size="s" color="support">
        Paragraph S Gray
      </Paragraph>
      <Paragraph size="s" stub />
    </Spacer>
  </BlockContent>
</Block>
```

Задать максимальное количество видимых строк

```jsx
<Block>
  <BlockContent>
    <Paragraph size="l" clamp={2}>
      В типографических элементах есть возможность задавать максимальное
      количество видимых строк через свойство clamp. Если текст выходит за
      заданные рамки, в конце текста будет добавлено многоточие
    </Paragraph>
  </BlockContent>
</Block>
```
