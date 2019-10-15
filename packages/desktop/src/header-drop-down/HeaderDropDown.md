```jsx
const HeaderDropDownExample = () => {
  const [show1, setShow1] = React.useState(false)
  const [show2, setShow2] = React.useState(false)
  const container = React.useRef()
  const target = React.useRef()
  return (
    <Pos ref={container} type="relative">
      <Pos type="relative" ref={target} zIndex={999}>
        <Header underline={show1 || show2}>
          <Flex px={4} justify="center" height={1}>
            <HeaderMenu
              children={[
                {href: '', title: 'Платежи', active: show1, onClick: () => setShow1(true)},
                {href: '', title: 'Переводы', active: show2, onClick: () => setShow2(true)},
                {title: 'Пополнение кошелька', onClick: () => alert('Пополение')},
              ]}
            />
          </Flex>
        </Header>
      </Pos>
      <HeaderDropDown 
        show={show1}
        target={target.current}
        container={container.current}
        onHide={() => setShow1(false)}
      >
        <Box width={200} mx="auto" px={2}>
          <Paragraph children="text 1"/>
        </Box>
      </HeaderDropDown>
      <HeaderDropDown 
        show={show2}
        target={target.current}
        container={container.current}
        onHide={() => setShow2(false)}
      >
        <Box width={200} mx="auto" px={2}>
          <Flex direction="row" pb={12}>
            <FlexItem>
              <Box mb={5}>
                <Caption children="Пластиковые карты qiwi"/>
              </Box>
              <Flex direction="row" px={4} mt={4}>
                <FlexItem mr={12}>
                  <HeaderBankCardLink 
                    href="/cards/qvp-gold" 
                    srcImg="https://static.qiwi.com/img/qiwi_com/cards/gold/list.png"
                    text="Карта QIWI payWave +"
                  />
                </FlexItem>
                <FlexItem>
                  <HeaderBankCardLink 
                    href="/cards/qvp-gold" 
                    srcImg="https://static.qiwi.com/img/qiwi_com/cards/chip/list.png"
                    text="Карта QIWI payWave"
                  />
                </FlexItem>
              </Flex>
            </FlexItem>
            <FlexItem>
              <Box mb={5}>
                <Caption children="Виртуальные карты "/>
              </Box>
              <LogoLink
                horizontal
                href="/cards/qvc" 
                title="Виртуальная карта QIWI" 
                icon={<Image width={12} height={12} src="https://static.qiwi.com/img/providers/v2/categories/card.svg"/>}
              />
            </FlexItem>
          </Flex>
          <Card pt={5} bt="1px solid #d8d8d8">
            <Link href="/cards" target="_self" children="Все карты"/>
          </Card>
        </Box>
      </HeaderDropDown>
    </Pos>
  )
}

<HeaderDropDownExample/>
```
