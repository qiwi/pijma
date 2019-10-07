```jsx
<Block>
  <BlockContent>
    <SectionLink href="//qiwi.com" target="_blank">
      {({active, focus, hover}) => (
        <Box p={2}>
          <Paragraph children="href"/>
        </Box>
      )}
    </SectionLink>
  </BlockContent>
</Block>
```

### Select

```jsx
<Block>
  <BlockContent>
    <SectionLink select href="//qiwi.com" target="_blank">
      {({active, focus, hover}) => (
        <Box p={2}>
          <Paragraph children="href"/>
        </Box>
      )}
    </SectionLink>
  </BlockContent>
</Block>
```
