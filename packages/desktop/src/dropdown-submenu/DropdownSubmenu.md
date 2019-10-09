```jsx
const DropdownSubmenuExample = () => {
  const [show, setShow] = React.useState(false)
  const container = React.useRef()
  const item = React.useRef()
  return (
    <React.Fragment>
    <Pos display="inline-block" type="relative" zIndex={1000} ref={container}>
      <Header>
        <HeaderMenu
          children={[
            {href: '', title: 'Платежи', active: {show}, onClick: () => setShow(!show), ref: {item}},
            {href: '', title: 'Переводы'},
            {title: 'Пополнение кошелька', onClick: () => alert('Пополение')},
          ]}
        />
      </Header>
    </Pos>
    <DropdownSubmenu 
      show={show}
      target={item.current}
      container={container.current}
      onHide={() => setShow(false)}
    >
      <Paragraph children="text"/>
    </DropdownSubmenu>
    </React.Fragment>
  )
}

<DropdownSubmenuExample/>
```
