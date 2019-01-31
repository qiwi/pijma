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
    title="Eto shapka"
    footer={<Actions>
              <Button
                kind="brand"
                size="normal"
                type="button"
                text="Close DropUp"
                onClick={() => setState({show: !state.show})}
              />
            </Actions>
            }
    children={(
      <Box p={6}>
        <Heading>DropUp</Heading>
        <br/>
        <br/>
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
    title="Eto shapka"
    horizontal
    children={(
      <Box p={6}>
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
