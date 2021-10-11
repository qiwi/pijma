```jsx
const HeaderDropDownExample = () => {
  const [show, setShow] = React.useState(0)
  const container = React.useRef()
  const target = React.useRef()
  return (
    <Pos ref={container} type="relative">
      <Pos type="relative" ref={target} zIndex={999}>
        <Header underline={show !== 0}>
          <Flex px={4} justify="center" height={1}>
            <HeaderMenu
              children={[
                {href: '', title: 'Платежи', active: show === 1, onClick: () => setTimeout(() => setShow(1), 0)},
                {href: '', title: 'Переводы', active: show === 2, onClick: () => setTimeout(() => setShow(2), 2)},
                {title: 'Пополнение кошелька', onClick: () => alert('Пополение')},
              ]}
            />
          </Flex>
        </Header>
      </Pos>
      <HeaderDropDown
        show={show === 1}
        target={target.current}
        container={container.current}
        onHide={() => setShow(0)}
      >
        <Box width={200} mx="auto" px={2}>
          <Paragraph children="text 1"/>
        </Box>
      </HeaderDropDown>
      <HeaderDropDown
        show={show === 2}
        target={target.current}
        container={container.current}
        onHide={() => setShow(0)}
      >
        <Box width={200} mx="auto" px={2}>
          <Striper>
            <Flex direction="row" pb={6}>
              <FlexItem>
                <Box mb={5}>
                  <Caption children="Пластиковые карты qiwi"/>
                </Box>
                <Flex direction="row" px={4} mt={4}>
                  <FlexItem mr={12} onClick={() => setShow(0)}>
                    <HeaderBankCardLink
                      href="/#/Компоненты/HeaderBankCardLink"
                      src="https://static.qiwi.com/img/qiwi_com/cards/gold/list.png"
                      text="Карта QIWI payWave +"
                    />
                  </FlexItem>
                  <FlexItem onClick={() => setShow(0)}>
                    <HeaderBankCardLink
                      href="/#/Компоненты/Header"
                      src="https://static.qiwi.com/img/qiwi_com/cards/chip/list.png"
                      text="Карта QIWI payWave"
                    />
                  </FlexItem>
                </Flex>
              </FlexItem>
              <FlexItem>
                <Box mb={5}>
                  <Caption children="Виртуальные карты "/>
                </Box>
                <Box onClick={() => setShow(0)}>
                  <LogoLink
                    horizontal
                    href="/#/Компоненты/HeaderMenu"
                    title="Виртуальная карта QIWI"
                    icon={<Image width={12} height={12} src="https://static.qiwi.com/img/providers/v2/categories/card.svg"/>}
                  />
                </Box>
              </FlexItem>
            </Flex>
            <Box pt={5} onClick={() => setShow(0)}>
              <Link
                href="/#/Компоненты/HeaderDropDown"
                children="Все карты"
              />
            </Box>
          </Striper>
        </Box>
      </HeaderDropDown>
    </Pos>
  )
}

<HeaderDropDownExample/>
```
