```jsx
<Card bg="#fff" py={4}>
  <MenuLink
    data-testid="menu-link"
    icon={<Icon name="qiwi" />}
    title="text"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    icon={<Icon name="qiwi" />}
    title="long text long text long text long text long text long text long text"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    icon={<Icon name="qiwi" />}
    title="long text long text long text long text long text long text long text"
    notes="long notes long notes long notes long notes long notes long notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    icon={<Icon name="qiwi" />}
    title="long text long text long text long text long text long text long text"
    notes="with notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    submenu
    icon={<Icon name="qiwi" />}
    title="text"
    notes="with notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    submenu
    icon={<Icon name="qiwi" />}
    title="text"
    href="/"
  />
  <MenuLink
    data-testid="no"
    stub
    icon={<Icon name="qiwi" />}
    title="text"
    href="#"
  />
  <MenuLink
    data-testid="no"
    stub
    submenu
    icon={<Icon name="qiwi" />}
    title="text"
    notes="notes"
    href="#"
  />
</Card>
```

```jsx
<Card bg="#fff" py={4}>
  <MenuLink
    data-testid="menu-link"
    icon={<Icon size={12} name="qiwi" />}
    title="text"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    icon={<Icon size={12} name="qiwi" />}
    title="long text long text long text long text long text long text long text"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    icon={<Icon size={12} name="qiwi" />}
    title="long text long text long text long text long text long text long text"
    notes="long notes long notes long notes long notes long notes long notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    icon={<Icon size={12} name="qiwi" />}
    title="long text long text long text long text long text long text long text"
    notes="with notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    submenu
    icon={<Icon size={12} name="qiwi" />}
    title="text"
    notes="with notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    submenu
    icon={<Icon size={12} name="qiwi" />}
    title="text"
    href="/"
  />
  <MenuLink
    data-testid="no"
    stub
    submenu
    icon={<Icon name="qiwi" />}
    title="text"
    href="#"
    size="m"
  />
  <MenuLink
    data-testid="no"
    stub
    submenu
    icon={<Icon name="qiwi" />}
    title="text"
    notes="notes"
    href="#"
    size="m"
  />
</Card>
```

```jsx
<Card bg="#fff" py={4}>
  <MenuLink data-testid="menu-link" title="text" href="/" />
  <MenuLink
    data-testid="menu-link"
    title="long text long text long text long text long text long text long text"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    title="long text long text long text long text long text long text long text"
    notes="long notes long notes long notes long notes long notes long notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    title="long text long text long text long text long text long text long text"
    notes="with notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    submenu
    title="long text long text long text long text long text long text long text"
    notes="with notes"
    href="/"
  />
  <MenuLink
    data-testid="menu-link"
    submenu
    title="text"
    notes="with notes"
    href="/"
  />
  <MenuLink data-testid="menu-link" submenu title="text" href="/" />
  <MenuLink data-testid="stub" stub title="text" href="#" />
  <MenuLink
    data-testid="stub"
    stub
    submenu
    title="text"
    notes="notes"
    href="#"
  />
</Card>
```
