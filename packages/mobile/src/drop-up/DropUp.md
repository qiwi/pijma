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
    onBack={() => setState({show: false})}
    header={<Heading>Eto shapka</Heading>}
    children={(
      <Box p="24px">
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
      </Box>
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
    header={<Heading>Eto shapka</Heading>}
    horizontal
    children={(
      <Box p="24px">
        <Heading>DropUp Horizontal</Heading>
        <br/>
        <br/>
        <Actions>
          <Button
            kind="brand"
            size="normal"
            type="button"
            text="Close DropUp Horizontal"
            onClick={() => setState({showHorizontal: !state.showHorizontal})}
          />
        </Actions>
      </Box>
    )}
  />
</Box>
```
