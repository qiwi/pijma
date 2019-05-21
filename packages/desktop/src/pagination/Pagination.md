```jsx
initialState = {activePage: 1};
<Pagination
  totalItemsCount={100}
  itemsCountPerPage={10}
  pageRangeDisplayed={3}
  activePage={state.activePage}
  onClick={(activePage) => setState({activePage})}
/>
```

```jsx
initialState = {activePage: 1};
<Pagination
  totalItemsCount={100}
  itemsCountPerPage={10}
  pageRangeDisplayed={3}
  activePage={state.activePage}
  withStartButton={true}
  onClick={(activePage) => setState({activePage})}
/>
```