```jsx
const [showMenu, setShowMenu] = React.useState(false);

<React.Fragment>
<Spacer size="l">
  <Button
    kind="simple"
    size="normal"
    type="button"
    text="Показать меню"
    onClick={() => setShowMenu(true)}
  />
</Spacer>
  <HeaderMenu
    show={showMenu}
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
            attention
          />
        </MenuContainer>
        <MenuContainer>
          <MenuLink
            title="Закрыть меню"
            href="https://qiwi.com"
            onClick={() => setShowMenu(false)}
          />
        </MenuContainer>
      </Striper>
    )}
  />
</React.Fragment>
```

