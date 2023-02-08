```jsx
const [value, setValue] = React.useState(0)
return (
  <Block>
    <BlockContent>
      <Spacer size="l">
        <Paragraph align="center" size="l" bold>
          Оцените работу нашего сайта
        </Paragraph>
        <Paragraph align="center" size="m">
          Мы хотим стать лучше для вас
        </Paragraph>
        <Flex justify="center">
          <Rating
            data-testid="rating"
            value={value}
            size="m"
            onChange={(value) => setValue(value)}
          />
        </Flex>
        <Paragraph align="center" size="m">
          Удовлетворительно
        </Paragraph>
      </Spacer>
    </BlockContent>
  </Block>
)
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="s">
      <Paragraph size="m" bold>
        Максим Сибирский
      </Paragraph>
      <Paragraph size="s" color="support">
        15 июня 2018
      </Paragraph>
      <Rating data-testid="rating" value={4} size="s" disabled />
      <Paragraph size="m">
        Получил маленький подарок в виде возврата 4% от суммы после получения
        товара! Если бы переводили из рублей в доллары по нормальной цене было
        бы ещё лучше.
      </Paragraph>
    </Spacer>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="s">
      <Heading size="4" stub />
      <Rating data-testid="no" stub size="s" disabled />
      <Paragraph stub size="m">
        Получил маленький подарок в виде возврата 4% от суммы после получения
        товара! Если бы переводили из рублей в доллары по нормальной цене было
        бы ещё лучше.
      </Paragraph>
    </Spacer>
  </BlockContent>
</Block>
```
