```jsx
initialState = {menuCollapsed: true};
<Header zIndex={0}>
  <Flex height={1} px={4} align="center" justify="space-between">
     <FlexItem width={0.25} shrink={0}>
       <Box width={6} height={6} onClick={() => setState({menuCollapsed: !state.menuCollapsed, showMenu: state.menuCollapsed})}>
         <CrossBurger active={!state.menuCollapsed}/>
       </Box>
     </FlexItem>
     <FlexItem width={37} height={7} shrink={0} align="center">
       <Typo size={6} align="center">LOGO</Typo>
     </FlexItem>
     <FlexItem
       width={0.25}
       shrink={1
       opacity={state.menuCollapsed? 1 : 0}
       transition={state.menuCollapsed? 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)' : 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)'}
     >
       <Flex justify="flex-end">
         <Box display="inline-block">
           <Button type="button" kind="simple" size="minor" text="Войти"/>
         </Box>
       </Flex>
     </FlexItem>
  </Flex>
</Header>
```

```jsx static
<React.Fragment>
  <Header>
    {/*Header content*/}
  </Header>
  <HeaderMenu
    show={true}
    from="top"
    zIndex={10006}
    header="Header"
  >
    {/*HeaderMenu content*/}
  </HeaderMenu>
</React.Fragment>
```
