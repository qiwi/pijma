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