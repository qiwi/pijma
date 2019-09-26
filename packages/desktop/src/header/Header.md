```jsx
<Header>
  <Flex width={1} height={1} justify="space-between">
    <FlexItem ml={6}>
      <Flex height={1}>
        <FlexItem align="center" shrink={0} mr={11}>
          <Lnk href={window.location.href}>
            <Box
              as="img"
              src="https://static.qiwi.com/img/qiwi_com/header/qiwi-wallet-logo.svg"
              width={24}
              height={12}
            />
          </Lnk>
        </FlexItem>
        <FlexItem shrink={0} mr={6}>
          <HeaderMenu
            children={[
              {href: `${location.href}?menu=1`, title: 'Платежи', active: true},
              {href: `${location.href}?menu=2`, title: 'Переводы'},
            ]}
          />
        </FlexItem>
        <FlexItem align="center" shrink={0} width={6} height={6} cursor="pointer">
          <Icon
            name="search"
          />
        </FlexItem>
      </Flex>
    </FlexItem>
    <FlexItem align="center" shrink={0} ml={11} mr={6}>
      <Actions size="minor">
        <Button
          kind="simple"
          size="minor"
          text="Создать кошелек"
        />
        <Button
          kind="brand"
          size="minor"
          text="Войти"
        />
      </Actions>
    </FlexItem>
  </Flex>
</Header>
```
