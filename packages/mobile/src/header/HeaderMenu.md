```jsx
initialState = {showMenu: false, showStubMenu: false};

<React.Fragment>
<Spacer size="l">
  <Button
    kind="simple"
    size="normal"
    type="button"
    text="Показать меню"
    onClick={() => setState({showMenu: true})}
  />
  <Button
    kind="simple"
    size="normal"
    type="button"
    text="Показать stub меню"
    onClick={() => setState({showStubMenu: true})}
  />
</Spacer>
  <HeaderMenu
    show={state.showMenu}
    from="top"
    children={(
      <Striper>
        <MenuContainer>
          <MenuLink
            title="Components"
            notes="List of pijma components"
            submenu
          />
          <MenuLink
            title="link"
            notes="with notes"
            href="https://qiwi.com"
          />
          <MenuLink
            title="link"
            href="https://qiwi.com"
          />
        </MenuContainer>
        <MenuContainer>
          <MenuLink
            title="Закрыть меню"
            href="https://qiwi.com"
            onClick={() => setState({showMenu: false})}
          />
        </MenuContainer>
      </Striper>
    )}
  />
  <HeaderMenu
    stub
    show={state.showStubMenu}
    from="top"
    children={undefined}
  />
</React.Fragment>


```

