```jsx
initialState = {value: 0};
<Block>
  <BlockContent>
    <Spacer size="l">
      <Paragraph align="center" size="l"><Text bold>Оцените работу нашего сайта</Text></Paragraph>
      <Paragraph align="center" size="m">Мы хотим стать лучше для вас</Paragraph>
      <Flex align="center" justify="center" >
        <Rating onChange={(value) => setState({value})} value={state.value} size="m"/>
      </Flex>
      <Paragraph align="center" size="m">Удовлетворительно</Paragraph>
    </Spacer>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Spacer size="s">
      <Paragraph size="m"><Text bold>Максим Сибирский</Text></Paragraph>
      <Paragraph size="s" color="support">15 июня 2018</Paragraph>
      <Rating value={4} size="s" disabled/>
      <Paragraph size="m">
        Получил маленький подарок в виде возврата 4% от суммы 
        после получения товара! Если бы переводили из рублей в доллары 
        по нормальной цене было бы ещё лучше.
      </Paragraph>
    </Spacer>
  </BlockContent>
</Block>
```
