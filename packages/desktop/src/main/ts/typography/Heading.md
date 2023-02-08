## H1

```css static
font-family: Museo Sans
font-size: 32px
line-height: 36px
font-weight: 900
```

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem>
        <Heading data-testid="heading" size="1">
          Заголовок страницы
        </Heading>
      </FlexItem>
      <FlexItem ml={10}>
        <Heading data-testid="no" size="1" stub />
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

## H2

```css static
font-family: Museo Sans
font-size: 28px
line-height: 32px
font-weight: 900
```

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem>
        <Heading data-testid="heading" size="2">
          Заголовок раздела
        </Heading>
      </FlexItem>
      <FlexItem ml={10}>
        <Heading data-testid="no" size="2" stub />
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

## H3

```css static
font-family: Museo Sans
font-size: 24px
line-height: 28px
font-weight: 900
```

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem>
        <Heading data-testid="heading" size="3">
          Заголовок подраздела
        </Heading>
      </FlexItem>
      <FlexItem ml={10}>
        <Heading data-testid="no" size="3" stub />
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

## H4

```css static
font-family: Museo Sans
font-size: 20px
line-height: 24px
font-weight: 700
```

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem>
        <Heading data-testid="heading" size="4">
          Заголовок блока
        </Heading>
      </FlexItem>
      <FlexItem ml={10}>
        <Heading data-testid="no" size="4" stub />
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

## H5

```css static
font-family: Museo Sans
font-size: 16px
line-height: 20px
font-weight: 700
```

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem>
        <Heading data-testid="heading" size="5">
          Заголовок карточки
        </Heading>
      </FlexItem>
      <FlexItem ml={10}>
        <Heading data-testid="no" size="5" stub />
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

Задать максимальное количество видимых строк

```jsx
<Block>
  <BlockContent>
    <Heading size="4" data-testid="heading" clamp={2}>
      В типографических элементах есть возможность задавать максимальное
      количество видимых строк через свойство clamp. Если текст выходит за
      заданные рамки, в конце текста будет добавлено многоточие
    </Heading>
  </BlockContent>
</Block>
```
