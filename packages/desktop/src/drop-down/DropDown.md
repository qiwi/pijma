```
const DropDownExample = () => {
  const [show, setShow] = React.useState(false)
  const container = React.useRef()
  const button = React.useRef()
  return (
    <Pos display="inline-block" type="relative" ref={container}>
      <Actions size="normal">
        <Box ref={button}>
          <Button
            kind="simple"
            size="normal"
            type="button"
            text="Показать дропдаун"
            onClick={() => setShow(!show)}
          />
        </Box> 
      </Actions>
      <DropDown
        show={show}
        container={container.current}
        target={button.current}
        onHide={() => setShow(false)}
        offset={4}
        children={
          <Card s="0 28px 52px 0 rgba(0, 0, 0, 0.16)" bg="#fff" r={10} p={4}>
            <Spacer>
              <Paragraph>я содержимое дропдауна</Paragraph>
              <Paragraph>я большое содержимое дропдауна</Paragraph>
              <Paragraph>я содержимое дропдауна</Paragraph>
              <Paragraph>я большое содержимое дропдауна</Paragraph>
              <Paragraph>я содержимое дропдауна</Paragraph>
              <Paragraph>я большое содержимое дропдауна</Paragraph>
            </Spacer>
          </Card>
        }
      />
    </Pos>
  )
}

<Block>
  <BlockContent>
    <Spacer>
      <DropDownExample/>
    </Spacer>
  </BlockContent>
</Block>
```
