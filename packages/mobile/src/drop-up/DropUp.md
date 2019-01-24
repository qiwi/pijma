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

```jsx
<Box>
  <Actions>
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Open DropUp Horizontal"
      onClick={() => setState({showHorizontal: !state.showHorizontal})}
    />
  </Actions>
  <DropUp
    show={state.showHorizontal}
    onHide={() => setState({showHorizontal: false})}
    horizontal
    children={(
      <React.Fragment>
        <Heading>DropUp Horizontal</Heading>
        <br/>
        <br/>
        <Actions>
          <Button
            kind="brand"
            size="normal"
            type="button"
            text="Close DropUp Horizontal"
            onClick={() => setState({show: !state.showHorizontal})}
          />
        </Actions>
      </React.Fragment>
    )}
  />
</Box>
```
