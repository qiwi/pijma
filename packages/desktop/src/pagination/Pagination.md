```jsx
initialState = {activePage: 1};
<Card bg="#eee" p={4}>
  <Pagination
    totalPages={10}
    pageRangeDisplayed={3}
    activePage={state.activePage}
    onClick={(activePage) => setState({activePage})}
  />
</Card>
```

```jsx
initialState = {activePage: 1};
<Card bg="#eee" p={4}>
  <Pagination
    totalPages={10}
    pageRangeDisplayed={3}
    activePage={state.activePage}
    withStartButton={true}
    onClick={(activePage) => setState({activePage})}
  />
</Card>
```