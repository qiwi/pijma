```jsx
initialState = {activePage: 1};
<Pagination
  total={10}
  active={state.activePage}
  shadowed
  onChange={(activePage) => setState({activePage})}
/>
```

```jsx
<Pagination shadowed stub/>
```

```jsx
initialState = {activePage: 1};
<Block>
  <BlockContent>
    <Pagination
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
    <Pagination stub/>
  </BlockContent>
</Block>
```
