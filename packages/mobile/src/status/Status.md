```jsx
<Card width={85} bg="#eee" p={7}>
  <Block>
    <Status
      icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
      title="Заголовок"
      children={
        <Flex align="center" direction="column">
          <Box mb={4}><Paragraph>Какой-то текст статуса</Paragraph></Box>
          <FlexItem><Button text="Обновить" type="submit" kind="simple" size="normal"/></FlexItem>
        </Flex>
      }
    />
  </Block>
</Card>
```

Статус без иконки

```jsx
<Card width={85} bg="#eee" p={7}>
  <Block>
    <Status
      title="Заголовок"
      children={
        <Flex align="center" direction="column">
          <Box mb={4}><Paragraph>Текст</Paragraph></Box>
          <FlexItem><Button text="Обновить" type="submit" kind="simple" size="normal"/></FlexItem>
        </Flex>
      }
    />
  </Block>
</Card>
```

Статус без кнопки

```jsx
<Card width={85} bg="#eee" p={7}>
  <Block>
    <Status
      icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
      title="Заголовок"
      children={
        <Paragraph>Какой-то текст статуса</Paragraph>
      }
    />
  </Block>
</Card>
```

Две кнопки

```jsx
<Card width={85} bg="#eee" p={7}>
  <Block>
    <Status
      icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
      title="Заголовок"
      children={
        <Spacer>
          <Box align="center">
            <Paragraph>Какой-то текст статуса</Paragraph>
          </Box>
          <Actions size="normal">
            <Button text="Закрыть" type="submit" kind="simple" size="normal"/>
            <Button text="Обновить" type="submit" kind="simple" size="normal"/>
          </Actions>
        </Spacer>
      }
    />
  </Block>
</Card>
```
