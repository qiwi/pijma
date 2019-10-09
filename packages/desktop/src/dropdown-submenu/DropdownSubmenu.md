```jsx
const DropdownSubmenuExample = () => {
  const [show, setShow] = React.useState(false)
  const container = React.useRef()
  const item = React.useRef()
  return (
    <Pos display="inline-block" type="relative" ref={container}>
      <HeaderMenu
        ref={item}
        children={[
          {href: `${location.href}?menu=1`, title: 'Платежи', active: true},
          {href: `${location.href}?menu=2`, title: 'Переводы'},
          {title: 'Пополнение кошелька', onClick: () => alert('Пополение')},
        ]}
      />
      <DropdownSubmenu 
        show={show}
        target={item.current}
        container={container.current}
        onHide={() => setShow(false)}
      >
        
      </DropdownSubmenu>
    </Pos>
  )
}

<Block>
  <BlockContent>
    <DropdownSubmenuExample/>
  </BlockContent>
</Block>
```
