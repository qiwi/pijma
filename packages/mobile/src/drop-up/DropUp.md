## DropUp

```jsx
<Box>
  <Actions>
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Open DropUp"
      onClick={() => setState({show: !state.show})}
    />
  </Actions>
  <DropUp
    show={state.show}
    onHide={() => setState({show: false})}
    children={(
      <React.Fragment>
        <Heading>DropUp</Heading>
        <br/>
        <br/>
        <Actions>
          <Button
            kind="brand"
            size="normal"
            type="button"
            text="Close DropUp"
            onClick={() => setState({show: !state.show})}
          />
        </Actions>
      </React.Fragment>
    )}
  />
</Box>
```
