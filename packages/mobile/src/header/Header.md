### Header menu

```jsx
initialState = {menuCollapsed: true};
<Pos type="fixed" top={0} left={0} width={1} zIndex={10002}>
  <Header active={!state.menuCollapsed}>
    <Flex height={1} px={4} align="center" justify="space-between">
      <FlexItem width={0.25} shrink={0}>
        <Box width={6} height={6} onClick={() => setState({menuCollapsed: !state.menuCollapsed, showMenu: state.menuCollapsed})}>
          <CrossBurger active={!state.menuCollapsed}/>
        </Box>
      </FlexItem>
      <FlexItem width={37} height={7} shrink={0} align="center">
        <Typo size={6} align="center">LOGO</Typo>
      </FlexItem>
      <FlexItem
        width={0.25}
        shrink={1}
        opacity={state.menuCollapsed? 1 : 0}
        transition={state.menuCollapsed? 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)' : 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)'}
      >
        <Flex justify="flex-end">
          <Box display="inline-block">
            <Button type="button" kind="simple" size="minor" text="Войти"/>
          </Box>
        </Flex>
      </FlexItem>
    </Flex>
    <Menu
      show={state.showMenu}
      from="top"
      children={(
        <Striper>
          <MenuContainer>
            <MenuItem
              text="Components"
              notes="List of pijma components"
              submenu
              onClick={() => setState({showSubmenu: true})}
            />
            <MenuItem
              text="link"
              notes="with notes"
              href="https://qiwi.com"
            />
            <MenuItem
              text="link"
              href="https://qiwi.com"
            />
          </MenuContainer>
          <MenuContainer>
            <MenuItem
              text="link with icon"
              href="https://qiwi.com"
              icon={<LoginIcon/>}
            />
          </MenuContainer>
        </Striper>
      )}
    />
    <Menu
      show={state.showSubmenu}
      from="right"
      zIndex={10006}
      header={(
        <Flex align="center" height={1}>
          <FlexItem shrink={1}>
            <Box width={6} height={6} mx={4} onClick={() => setState({showSubmenu: false})}>
              <AngleLeftIcon/>
            </Box>
          </FlexItem>
          <FlexItem>
            <Typo size={5} weight={300} height={6}>
              Sub-menu
            </Typo>
          </FlexItem>
        </Flex>
      )}
    >
      <Spacer size="l">
        <React.Fragment>
          <MenuCaption text="Typography"/>
          <MenuItem
            text="BlockLink"
            href="/#/Компоненты/BlockLink"
          />
          <MenuItem
            text="Link"
            href="/#/Компоненты/Link"
          />
          <MenuItem
            text="Notice"
            href="/#/Компоненты/Notice"
          />
          <MenuItem
            text="Caption"
            href="/#/Компоненты/Caption"
          />
          <MenuItem
            text="Heading"
            href="/#/Компоненты/Heading"
          />
          <MenuItem
            text="Paragraph"
            href="/#/Компоненты/Paragraph"
          />
          <MenuItem
            text="Text"
            href="/#/Компоненты/Text"
          />
          <MenuItem
            text="Title"
            href="/#/Компоненты/Title"
          />
        </React.Fragment>
        <React.Fragment>
          <MenuCaption text="Other"/>
          <MenuItem
            text="Block"
            href="/#/Компоненты/Block"
          />
          <MenuItem
            text="Breaker"
            href="/#/Компоненты/Breaker"
          />
          <MenuItem
            text="Card"
            href="/#/Компоненты/Card"
          />
          <MenuItem
            text="Flex"
            href="/#/Компоненты/Flex"
          />
          <MenuItem
            text="ReCaptchaField"
            href="/#/Компоненты/ReCaptchaField"
          />
          <MenuItem
            text="Striper"
            href="/#/Компоненты/Striper"
          />
          <MenuItem
            text="Icon"
            href="/#/Компоненты/Icon"
          />
          <MenuItem
            text="WeakIcon"
            href="/#/Компоненты/WeakIcon"
          />
          <MenuItem
            text="Actions"
            href="/#/Компоненты/Actions"
          />
          <MenuItem
            text="BlockAccordion"
            href="/#/Компоненты/BlockAccordion"
          />
          <MenuItem
            text="Button"
            href="/#/Компоненты/Button"
          />
          <MenuItem
            text="ChackboxField"
            href="/#/Компоненты/CheckboxField"
          />
          <MenuItem
            text="Checkbox"
            href="/#/Компоненты/Checkbox"
          />
          <MenuItem
            text="DropUp"
            href="/#/Компоненты/DropUp"
          />
          <MenuItem
            text="Header"
            href="/#/Компоненты/Header"
          />
          <MenuItem
            text="RadioField"
            href="/#/Компоненты/RadioField"
          />
          <MenuItem
            text="SwitchField"
            href="/#/Компоненты/SwitchField"
          />
          <MenuItem
            text="Switch"
            href="/#/Компоненты/Switch"
          />
        </React.Fragment>
      </Spacer>
    </Menu>
  </Header>
</Pos>
```
