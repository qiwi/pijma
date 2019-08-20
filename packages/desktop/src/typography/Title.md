## Title 1

Применяются в качестве заголовков

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem>
        <Title size="1">Title H1</Title>
      </FlexItem>
      <FlexItem ml={10}>
        <Title size="1" stub/>
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

```css static
font-family: Museo Sans
font-size: 48px
line-height: 56px
font-weight: 900
```

## Title 2

Применяются в качестве подзаголовков на лендингах.

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem>
        <Title size="2">Title H2</Title>
      </FlexItem>
      <FlexItem ml={10}>
        <Title size="2" stub/>
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

```css static
font-family: Museo Sans
font-size: 40px
line-height: 48px
font-weight: 900
```

Задать максимальное количество видимых строк

```jsx
<Block>
  <BlockContent>
    <Title size="2" clamp={3}>
      В типографических элементах есть возможность задавать максимальное количество видимых строк через свойство clamp. Если текст выходит за заданные рамки, в конце текста будет добавлено многоточие
    </Title>
  </BlockContent>
</Block>
```
