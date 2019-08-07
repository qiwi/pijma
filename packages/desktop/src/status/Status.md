```jsx
<Card bg="#eee" p={7}>
  <Block>
    <BlockContent indent="m">
      <Status
        icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
        title="Заголовок"
        children={
          <Flex align="center" direction="column">
            <Box mb={4}><Paragraph>Какой-то текст</Paragraph></Box>
            <FlexItem><Button text="Обновить" type="submit" kind="simple" size="normal"/></FlexItem>
          </Flex>
        }
      />
    </BlockContent>
  </Block>
</Card>
```

Статус без иконки

```jsx
<Card bg="#eee" p={7}>
  <Block>
    <BlockContent indent="m">
      <Status
        title="Заголовок"
        children={
          <Flex align="center" direction="column">
            <Box mb={4}><Paragraph>Text</Paragraph></Box>
            <FlexItem><Button text="Send" type="submit" kind="simple" size="normal"/></FlexItem>
          </Flex>
        }
      />
    </BlockContent>  
  </Block>
</Card>
```

Статус без кнопки

```jsx
<Card p={7}>
  <Section>
    <Box pt={11} pb={12}>
      <Status
        icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
        title="Заголовок"
        children={'Передаем только текст'}
      />
    </Box> 
  </Section>
</Card>
```

Две кнопки

```jsx
<Card bg="#eee" p={7}>
  <Block>
    <BlockContent indent="m">
      <Status
        icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
        title="Заголовок"
        children={
          <Spacer>
            <Paragraph align="center">Какой-то текст статуса</Paragraph>
            <Actions size="normal">
              <Button text="Закрыть" type="submit" kind="simple" size="normal"/>
              <Button text="Обновить" type="submit" kind="simple" size="normal"/>
            </Actions>
          </Spacer>
        }
      />
    </BlockContent> 
  </Block>
</Card>
```
