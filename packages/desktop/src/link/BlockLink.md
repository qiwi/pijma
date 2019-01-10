Иногда ссылка выступает в роли легкого аналога кнопки
```jsx
{applyDefaultClickHandler((href, target) => window.open(href, target || '_self'))}
<Spacer size="xl">
  <Flex align="baseline">
    <FlexItem pr={4}>
      <BlockLink href="https:/qiwi.com" accent >
        {({active, focus, hover}) => (
          <Box p={10}>
            <Text
              color={hover || active || focus ? 'warning' : 'default'}
              decoration="none"
              transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            >Перейти на главную</Text>
          </Box>
        )}
      </BlockLink>  
    </FlexItem>
  </Flex>
</Spacer>
```
