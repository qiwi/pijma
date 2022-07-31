```jsx
const [activePage, setActivePage] = React.useState(1)
return (
  <Pagination
    total={10}
    active={activePage}
    shadowed
    onChange={(activePage) => setActivePage(activePage)}
  />
)
```

```jsx
<Pagination total={10} active={0} shadowed stub />
```

```jsx
const [activePage, setActivePage] = React.useState(1)
return (
  <Block>
    <BlockContent>
      <Pagination
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
    <Pagination total={10} active={0} stub />
  </BlockContent>
</Block>
```
