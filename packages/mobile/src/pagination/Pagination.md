```jsx
initialState = {activePage: 1};
<Card bg="#eee" p={4}>
  <Pagination
      total={10}
      active={state.activePage}
      shadowed
      onChange={(activePage) => setState({activePage})}
  />
</Card>
```

```jsx
initialState = {activePage: 1};
<Card bg="#fff" p={4}>
  <Pagination
    total={10}
    active={state.activePage}
    onChange={(activePage) => setState({activePage})}
  />
</Card>
```

```jsx
<Card bg="#fff" p={4}>
  <Pagination
    total={10}
    active={2}
    href={(page) => `${location.href}?page=${page}`}
  />
</Card>
```