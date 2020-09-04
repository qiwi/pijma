```jsx
initialState = {scroll: false};
<Block>
  <BlockContent>
    <Box mb={300}>
      <Actions size="accent">
        <Button
          kind="brand"
          size="accent"
          text="Scroll to input"
          onClick={() => setState({scroll: true})}
        />
      </Actions>
    </Box>
    <Scroll scroll={state.scroll}>
      {({ref}) => (
        <Box ref={ref} width={50}>
          <TextField
            title="Поле ввода"
            type="text"
            value={state.text}
            onChange={text => setState({text})}
          />
        </Box>
      )}
    </Scroll>
  </BlockContent>
</Block>
```
