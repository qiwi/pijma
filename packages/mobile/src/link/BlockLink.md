Интерактивные элементы, реагирующие на наведение и нажатие. Обычно по нажатию на такой блок осуществляется переход в другой раздел.

```jsx
<Card bg="#f5f5f5" p={4}>
  <Flex>
    <FlexItem pr={4}>
      <BlockLink href="//qiwi.com" target="_blank">
        {({active, focus, hover}) => (
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
    <FlexItem pr={4}>
      <BlockLink href="//qiwi.com" target="_blank" accent>
        {({active, focus, hover}) => (
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
</Card>
```

Пример использования — промо-баннеры на главной странице qiwi.com.

```jsx
<Card bg="#f5f5f5" p={4}>
  <Flex>
    <FlexItem pr={4}>
      <BlockLink href="//qiwi.com" target="_blank">
        {({active, focus, hover}) => (
          <Box
            as="img"
            src="https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b.jpg"
            srcSet="https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b@2x.jpg 2x, https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b@3x.jpg 3x"
            width={70}
            height={100}
          />
        )}
      </BlockLink>
    </FlexItem>
    <FlexItem pr={4}>
      <BlockLink href="//qiwi.com" target="_blank" accent>
        {({active, focus, hover}) => (
          <Box
            as="img"
            src="https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b.jpg"
            srcSet="https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b@2x.jpg 2x, https://static.qiwi.com/img/qiwi_com/promo/main/banner/new/132/b@3x.jpg 3x"
            width={70}
            height={100}
          />
        )}
      </BlockLink>
    </FlexItem>
  </Flex>
</Card>
```
