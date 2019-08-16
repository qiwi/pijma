
## H1

```css static
font-family: Museo Sans
font-size: 28px
line-height: 32px
font-weight: 900
```

```jsx
<Flex>
  <FlexItem>
    <Spacer size="m">
      <Heading size="1">
        Заголовок страницы
      </Heading>
    </Spacer>
  </FlexItem>
  <FlexItem>
    <Box ml={5}>
      <Spacer size="m">
        <Heading size="1" stub/>
      </Spacer>
    </Box>
  </FlexItem>
</Flex>
```

## H2

```css static
font-family: Museo Sans
font-size: 24px
line-height: 28px
font-weight: 900
```

```jsx
<Flex>
  <FlexItem>
    <Spacer size="m">
      <Heading size="2">
        Заголовок раздела
      </Heading>
    </Spacer>
  </FlexItem>
  <FlexItem>
    <Box ml={5}>
      <Spacer size="m">
        <Heading size="2" stub/>
      </Spacer>
    </Box>
  </FlexItem>
</Flex>
```

## H3

```css static
font-family: Museo Sans
font-size: 20px
line-height: 24px
font-weight: 900
```

```jsx
<Flex>
  <FlexItem>
    <Spacer size="m">
      <Heading size="3">
        Заголовок подраздела
      </Heading>
    </Spacer>
  </FlexItem>
  <FlexItem>
    <Box ml={5}>
      <Spacer size="m">
        <Heading size="3" stub/>
      </Spacer>
    </Box>
  </FlexItem>
</Flex>
```

## H4

```css static
font-family: Museo Sans
font-size: 16px
line-height: 20px
font-weight: 700
```

```jsx
<Flex>
  <FlexItem>
    <Spacer size="m">
      <Heading size="4">
        Заголовок блока
      </Heading>
    </Spacer>
  </FlexItem>
  <FlexItem>
    <Box ml={5}>
      <Spacer size="m">
        <Heading size="4" stub/>
      </Spacer>
    </Box>
  </FlexItem>
</Flex>
```

Задать максимальное количество видимых строк

```jsx
<Heading size="4" clamp={4}>
    В типографических элементах есть возможность задавать максимальное количество видимых строк через свойство clamp. Если текст выходит за заданные рамки, в конце текста будет добавлено многоточие
</Heading>
```
