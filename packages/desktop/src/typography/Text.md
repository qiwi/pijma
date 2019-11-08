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
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Text size="l" bold>
            Body L Default 500
            Вы можете привязать карты
            других банков к кошельку
          </Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="l" clamp={3} stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="l" bold><Text color="failure">Error</Text> 500</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="l" stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="l" color="success">Success</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="l" stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="l" color="warning">Warning</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="l" stub/>
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```

```css static
font-family: Museo Sans
font-size: 20px
line-height: 28px
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Text size="l" compact bold>
            Body L Compact 500
            Вы можете привязать карты
            других банков к кошельку
          </Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="l" compact clamp={3} stub/>
        </FlexItem>
      </Flex>
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
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Text size="m" bold>
            Body M Default 500
            Вы можете привязать карты
            других банков к кошельку
          </Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="m" clamp={2} stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="m" bold><Text color="failure">Error</Text> 500</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="m" stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="m" color="success">Success</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="m" stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="m" color="warning">Warning</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="m" stub/>
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```

```css static
font-family: Museo Sans
font-size: 16px
line-height: 20px
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Text size="m" compact bold>
            Body M Compact 500
            Вы можете привязать карты
            других банков к кошельку
          </Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="m" compact clamp={2} stub/>
        </FlexItem>
      </Flex>
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
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Text size="s" bold>
            Body S Default 500
            Вы можете привязать карты
            других банков к кошельку
          </Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="s" clamp={2} stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="s" bold><Text color="failure">Error</Text> 500</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="s" stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="s" color="success">Success</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="s" stub/>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem width={0.5}>
          <Text size="s" color="warning">Warning</Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="s" stub/>
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```

```css static
font-family: Museo Sans
font-size: 14px
line-height: 16px
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Text size="s" display="inline-block" compact bold>
            Body S Compact 500
            Вы можете привязать карты
            других банков к кошельку
          </Text>
        </FlexItem>
        <FlexItem width={0.5}>
          <Text size="s" compact clamp={2} stub/>
        </FlexItem>
      </Flex>
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
