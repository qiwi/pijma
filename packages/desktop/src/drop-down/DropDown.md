ДропДаун

```
const DropDownExample = () => {
  const [show, setShow] = React.useState(false)
  const [container] = React.useState(React.createRef())
  const [button] = React.useState(React.createRef())
  return (
    <Box>
      <Pos ref={container} type="relative">
        <Actions size="normal">
          <Button
            kind="simple"
            size="normal"
            type="button"
            text="Показать дропдаун"
            onClick={() => setShow(!show)}
            ref={button}
          />
        </Actions>
      </Pos>
      <DropDown
        container={container.current}
        show={show}
        target={() => button.current}
        onHide={() => setShow(false)}
        topOffset={64}
        children={
          <Spacer>
            <Paragraph size="m" bold>я содержимое дропдауна</Paragraph>
            <Paragraph size="m" bold>я большое содержимое дропдауна</Paragraph>
          </Spacer>
        }
      />
    </Box>
  )
}

<DropDownExample/>
```
