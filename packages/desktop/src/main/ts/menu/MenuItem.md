```jsx
<Card bg="#fff" py={4}>
  <MenuItem data-testid="menu-item" icon={<Icon name="qiwi" />} text="text" />
  <MenuItem
    icon={<Icon name="qiwi" />}
    text="long text long text long text long text long text long text long text"
    active
  />
  <MenuItem
    data-testid="menu-item"
    icon={<Icon name="qiwi" />}
    text="long text long text long text long text long text long text long text"
    notes="long notes long notes long notes long notes long notes long notes"
    focus
    hover
  />
  <MenuItem
    data-testid="menu-item"
    icon={<Icon name="qiwi" />}
    text="long text long text long text long text long text long text long text"
    notes="with notes"
  />
  <MenuItem
    data-testid="menu-item"
    submenu
    icon={<Icon name="qiwi" />}
    text="text"
    notes="with notes"
  />
  <MenuItem
    data-testid="menu-item"
    submenu
    icon={<Icon name="qiwi" />}
    text="text"
  />
  <MenuItem
    data-testid="no"
    icon={<Icon name="qiwi" />}
    text="text"
    submenu
    stub
  />
  <MenuItem
    data-testid="no"
    icon="if you need icon stub put any corrent content here"
    text="text"
    notes="if you need notes stub put any corrent content here"
    stub
  />
</Card>
```

```jsx
<Card bg="#fff" py={4}>
  <MenuItem
    data-tesid="menu-item"
    icon={<Icon size={12} name="qiwi" />}
    text="text"
  />
  <MenuItem
    data-tesid="menu-item"
    icon={<Icon size={12} name="qiwi" />}
    text="long text long text long text long text long text long text long text"
  />
  <MenuItem
    data-tesid="menu-item"
    icon={<Icon size={12} name="qiwi" />}
    text="long text long text long text long text long text long text long text"
    notes="long notes long notes long notes long notes long notes long notes"
  />
  <MenuItem
    data-tesid="menu-item"
    icon={<Icon size={12} name="qiwi" />}
    text="long text long text long text long text long text long text long text"
    notes="with notes"
  />
  <MenuItem
    data-tesid="menu-item"
    submenu
    icon={<Icon size={12} name="qiwi" />}
    text="text"
    notes="with notes"
  />
  <MenuItem
    data-tesid="menu-item"
    submenu
    icon={<Icon size={12} name="qiwi" />}
    text="text"
  />
  <MenuItem
    data-tesid="no"
    icon="if you need icon stub put any corrent content here"
    size="m"
    text="text"
    notes="if you need notes stub put any corrent content here"
    stub
  />
  <MenuItem
    data-tesid="no"
    icon="if you need icon stub put any corrent content here"
    size="m"
    submenu
    stub
  />
</Card>
```

```jsx
<Card bg="#fff" py={4}>
  <MenuItem data-tesid="menu-item" text="text" />
  <MenuItem
    data-tesid="menu-item"
    text="long text long text long text long text long text long text long text"
  />
  <MenuItem
    data-tesid="menu-item"
    text="long text long text long text long text long text long text long text"
    notes="long notes long notes long notes long notes long notes long notes"
  />
  <MenuItem
    data-tesid="menu-item"
    text="long text long text long text long text long text long text long text"
    notes="with notes"
  />
  <MenuItem
    data-tesid="menu-item"
    submenu
    text="long text long text long text long text long text long text long text"
    notes="with notes"
  />
  <MenuItem data-tesid="menu-item" submenu text="text" notes="with notes" />
  <MenuItem data-tesid="menu-item" submenu text="text" />
  <MenuItem
    data-testid="no"
    submenu
    notes="if you need notes stub put any corrent content here"
    stub
  />
  <MenuItem stub />
</Card>
```
