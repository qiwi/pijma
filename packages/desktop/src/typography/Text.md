## L

```css static
font-family: Museo Sans
font-size: 20px
line-height: 32px
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Paragraph size="l">Paragraph L <Text bold>Dark 500</Text></Paragraph>
      <Paragraph size="l">Paragraph L <Text bold><Text color="failure">Error</Text> 500</Text></Paragraph>
      <Paragraph size="l">Paragraph L <Text color="success">Success</Text> 300</Paragraph>
      <Paragraph size="l" color="support">Paragraph L <Text color="warning">Warning</Text> 300</Paragraph>
    </Spacer>
  </BlockContent>
</Block>
```

## M

```css static
font-family: Museo Sans
font-size: 16px
line-height: 24px
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Paragraph size="m">Paragraph M <Text bold>Dark 500</Text></Paragraph>
      <Paragraph size="m">Paragraph M <Text bold><Text color="failure">Error</Text> 500</Text></Paragraph>
      <Paragraph size="m">Paragraph M <Text color="success">Success</Text> 300</Paragraph>
      <Paragraph size="m" color="support">Paragraph M <Text color="warning">Warning</Text> 300</Paragraph>
    </Spacer>
  </BlockContent>
</Block>
```

## S

```css static
font-family: Museo Sans
font-size: 14px
line-height: 20px
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Paragraph size="s">Paragraph S <Text bold>Dark 500</Text></Paragraph>
      <Paragraph size="s">Paragraph S <Text bold><Text color="failure">Error</Text> 500</Text></Paragraph>
      <Paragraph size="s">Paragraph S <Text color="success">Success</Text> 300</Paragraph>
      <Paragraph size="s" color="support">Paragraph S <Text color="warning">Warning</Text> 300</Paragraph>
    </Spacer>
  </BlockContent>
</Block>
```

Задать максимальное количество видимых строк

```jsx
<Block>
  <BlockContent>
    <Text display="block" size="l" clamp={2}>
      В типографических элементах есть возможность задавать максимальное количество видимых строк через свойство clamp. Если текст выходит за заданные рамки, в конце текста будет добавлено многоточие
    </Text>
  </BlockContent>
</Block>
```
