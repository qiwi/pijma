Иногда ссылка выступает в роли легкого аналога кнопки

```jsx
<Flex direction="column">
  <FlexItem pb={4}>
    <BlockLink href="//qiwi.com" target="_blank">
      {({ active, focus, hover }) => (
        <Box p={10}>
          <Text
            color={hover || active || focus ? 'warning' : 'default'}
            decoration="none"
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            children="Перейти на главную"
          />
        </Box>
      )}
    </BlockLink>
  </FlexItem>
  <FlexItem>
    <BlockLink href="//qiwi.com" target="_blank" accent>
      {({ active, focus, hover }) => (
        <Box p={10}>
          <Text
            color={hover || active || focus ? 'warning' : 'default'}
            decoration="none"
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            children="Перейти на главную"
          />
        </Box>
      )}
    </BlockLink>
  </FlexItem>
</Flex>
```

```jsx
<Flex direction="column">
  <FlexItem pb={4}>
    <BlockLink href="//qiwi.com" target="_blank">
      {({ active, focus, hover }) => (
        <Card r={10} overflow="hidden">
          <Image
            src="https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b.jpg"
            srcSet="https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b@2x.jpg 2x, https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b@3x.jpg 3x"
            width={95}
            height={136}
          />
        </Card>
      )}
    </BlockLink>
  </FlexItem>
  <FlexItem>
    <BlockLink href="//qiwi.com" target="_blank" accent>
      {({ active, focus, hover }) => (
        <Card r={10} overflow="hidden">
          <Image
            src="https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b.jpg"
            srcSet="https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b@2x.jpg 2x, https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b@3x.jpg 3x"
            width={95}
            height={136}
          />
        </Card>
      )}
    </BlockLink>
  </FlexItem>
</Flex>
```
