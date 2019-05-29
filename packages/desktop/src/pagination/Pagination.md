```jsx
initialState = {activePage: 1};
<Card bg="#eee" p={4}>
  <Pagination
    totalPages={10}
    pageRangeDisplayed={3}
    activePage={state.activePage}
    onChange={(activePage) => setState({activePage})}
  />
</Card>
```

```jsx
initialState = {activePage: 1};
<Card bg="#fff" p={4}>
  <Pagination
    totalPages={10}
    pageRangeDisplayed={3}
    activePage={state.activePage}
    type="bordered"
    onChange={(activePage) => setState({activePage})}
  />
</Card>
```