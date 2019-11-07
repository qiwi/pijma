```jsx
initialState = {activePage: 1};
<Pagination
  stub={false}
  total={10}
  active={state.activePage}
  shadowed
  onChange={(activePage) => setState({activePage})}
/>
```

```jsx
<Pagination shadowed/>
```

```jsx
initialState = {activePage: 1};
<Block>
  <BlockContent>
    <Pagination
      stub={false}
      total={10}
      active={state.activePage}
      onChange={(activePage) => setState({activePage})}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Pagination/>
  </BlockContent>
</Block>
```
