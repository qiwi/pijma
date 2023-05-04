```jsx
const [activePage, setActivePage] = React.useState(1)
return (
  <Pagination
    data-testid="pagination"
    total={10}
    active={activePage}
    shadowed
    onChange={(activePage) => setActivePage(activePage)}
  />
)
```

```jsx
<Pagination data-testid="no" total={10} active={0} shadowed stub />
```

```jsx
const [activePage, setActivePage] = React.useState(1)
return (
  <Block>
    <BlockContent>
      <Pagination
        data-testid="pagination"
        total={10}
        active={activePage}
        onChange={(activePage) => setActivePage(activePage)}
      />
    </BlockContent>
  </Block>
)
```

```jsx
<Block>
  <BlockContent>
    <Pagination data-testid="no" total={10} active={0} stub />
  </BlockContent>
</Block>
```

```jsx
<Pagination data-testid="pagination" total={5} count={10} active={0} shadowed />
```

```jsx
<Pagination data-testid="pagination" total={10} active={100} shadowed />
```
