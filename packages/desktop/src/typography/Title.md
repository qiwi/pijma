## Title 1

Применяются в качестве заголовков

```jsx
<Flex>
  <FlexItem>
    <Spacer size="m">
      <Title size="1">Title H1</Title>
    </Spacer>
  </FlexItem>
  <FlexItem>
    <Box ml={10}>
      <Spacer size="m">
        <Title size="1" stub/>
      </Spacer>
    </Box>
  </FlexItem>
</Flex>
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
<Flex>
  <FlexItem>
    <Spacer size="m">
      <Title size="2">Title H2</Title>
    </Spacer>
  </FlexItem>
  <FlexItem>
    <Box ml={10}>
      <Spacer size="m">
        <Title size="2" stub/>
      </Spacer>
    </Box>
  </FlexItem>
</Flex>
```

```css static
font-family: Museo Sans
font-size: 40px
line-height: 48px
font-weight: 900
```

Задать максимальное количество видимых строк

```jsx
<Title size="2" clamp={3}>
    В типографических элементах есть возможность задавать максимальное количество видимых строк через свойство clamp. Если текст выходит за заданные рамки, в конце текста будет добавлено многоточие
</Title>
```
