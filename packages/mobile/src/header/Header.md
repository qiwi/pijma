### Header menu

```jsx
<Header type="fixed" menuVisible={state.menuVisible}>
  <Flex height={1} align="center" justify="space-between">
    <FlexItem width={0.25} shrink={0}>
      <Box width={6} height={6} onClick={() => setState({menuVisible: !state.menuVisible, showMenu: !state.menuVisible})}>
        <CrossBurger active={state.menuVisible}/>
      </Box>
    </FlexItem>
    <FlexItem width={37} height={7} shrink={0} align="center">
      <Typo size={6} align="center">LOGO</Typo>
    </FlexItem>
    <FlexItem width={0.25} shrink={0} opacity={state.menuVisible ? 0 : 1} transition={state.menuVisible ? 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)' : 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)'}>
      <Flex justify="flex-end">
        {state.authorized ? (
          <Box display="inline-block" width={6} height={6}>
            <Icon name="user"/>
          </Box>
        ) : (
          <Box display="inline-block">
            <Button type="button" kind="simple" size="minor" text="Войти"/>
          </Box>
        )}
      </Flex>
    </FlexItem>
  </Flex>
  <HeaderMenu
    show={state.showMenu}
    from="top"
    children={(
      <Striper>
        <React.Fragment>
          {Array.from(Array(5).keys()).map((key) => (
            <HeaderMenuItem
              key={key}
              text={`Menu item ${key + 1}`}
              rightIcon={<AngleRightIcon/>}
              onClick={() => setState({showSubmenu: true})}
            />
          ))}
        </React.Fragment>
        <HeaderMenuItem
          text="other link"
          href="https://qiwi/com"
          leftIcon={<LoginIcon/>}
        />
      </Striper>
    )}
  />
  <HeaderMenu
    show={state.showSubmenu}
    from="right"
    zIndex={10006}
    header={(
      <Flex align="center">
        <FlexItem shrink={0}>
          <Box width={14} height={14} p={4} onClick={() => setState({showSubmenu: false})}>
            <AngleLeftIcon/>
          </Box>
        </FlexItem>
        <FlexItem>
          <Title size="3">Sub-Menu</Title>
        </FlexItem>
      </Flex>
    )}
    children={(
      <Spacer size="l">
        <HeaderMenuCategory title="Category 1">
          {Array.from(Array(7).keys()).map((key) => (
            <HeaderMenuItem
              key={key}
              text={`Sub menu item ${key + 1}`}
              notes="subtitle"
              onClick={() => setState({showSubmenu: true})}
            />
          ))}
        </HeaderMenuCategory>
        <HeaderMenuCategory title="Category 2">
          {Array.from(Array(3).keys()).map((key) => (
            <HeaderMenuItem
              key={key}
              text={`Sub menu item ${key + 1}`}
              notes="subtitle"
              onClick={() => setState({showSubmenu: true})}
            />
          ))}
        </HeaderMenuCategory>
      </Spacer>
    )}
  />
</Header>
```
