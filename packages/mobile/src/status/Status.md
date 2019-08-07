```jsx
<Card bg="#e6e6e6" p={7}>
  <Grid layout={4}>
    <Block>
      <BlockContent indent="l">
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
    <Section>
      <Box pt={6} pb={6}>
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
      </Box> 
    </Section>
  </Grid>
</Card>
```

Статус без иконки

```jsx
<Card bg="#eee" p={7}>
  <Grid layout={4}>
    <Block>
      <BlockContent indent="l">
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
  </Grid>
</Card>
```

Статус без кнопки

```jsx
<Card p={7}>
  <Grid layout={4}>
    <Section>
      <Box pt={6} pb={6}>
        <Status
          icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
          title="Заголовок"
          children={'Передаем только текст'}
        />
      </Box> 
    </Section>
  </Grid>
</Card>
```

Две кнопки

```jsx
<Card bg="#eee" p={7}>
  <Grid layout={4}>
    <Block>
      <BlockContent indent="l">
        <Status
          icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
          title="Заголовок"
          children={
            <Spacer>
              <Paragraph align="center">Какой-то текст</Paragraph>
              <Actions size="normal">
                <Button text="Закрыть" type="submit" kind="simple" size="normal"/>
                <Button text="Обновить" type="submit" kind="simple" size="normal"/>
              </Actions>
            </Spacer>
          }
        />
       </BlockContent>   
      </Block>
  </Grid>
</Card>
```
