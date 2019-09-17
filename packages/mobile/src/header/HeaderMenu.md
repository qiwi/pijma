```jsx
initialState = {showMenu: false};

<React.Fragment>
  <Button
    kind="simple"
    size="normal"
    type="button"
    text="Показать меню"
    onClick={() => setState({showMenu: true})}
  />
  <HeaderMenu
    show={state.showMenu}
    from="top"
    children={(
      <Striper>
        <MenuContainer>
          <MenuItem
            text="Components"
            notes="List of pijma components"
            submenu
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
            text="Закрыть меню"
            href="https://qiwi.com"
            onClick={() => setState({showMenu: false})}
          />
        </MenuContainer>
      </Striper>
    )}
  />
</React.Fragment>
```
