```jsx
initialState = {activePage: 1};
<Card bg="#eee" p={4}>
  <BlockPagination
      total={10}
      active={state.activePage}
      onChange={(activePage) => setState({activePage})}
  />
</Card>
```

```jsx
<Card bg="#eee" p={4}>
  <BlockPagination
    total={10}
    active={2}
    href={(page) => `${location.href}?page=${page}`}
  />
</Card>
```