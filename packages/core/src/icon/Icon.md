### Basic 24 &times; 24

```jsx
initialState = {color: '#000', size: 6};
<Grid columns={12} layout={[1]}>
  <Icon name="angle-right" size={state.size} color={state.color}/>
  <Icon name="angle-left" size={state.size} color={state.color}/>
  <Icon name="angle-up" size={state.size} color={state.color}/>
  <Icon name="angle-down" size={state.size} color={state.color}/>
  <Icon name="angle-double-right-small" size={state.size} color={state.color}/>
  <Icon name="angle-double-left-small" size={state.size} color={state.color}/>
  <Icon name="angle-double-right" size={state.size} color={state.color}/>
  <Icon name="angle-double-left" size={state.size} color={state.color}/>
  <Icon name="angle-small-right" size={state.size} color={state.color}/>
  <Icon name="angle-small-left" size={state.size} color={state.color}/>
  <Icon name="angle-small-up" size={state.size} color={state.color}/>
  <Icon name="angle-small-down" size={state.size} color={state.color}/>
  <Icon name="arrow-right" size={state.size} color={state.color}/>
  <Icon name="arrow-left" size={state.size} color={state.color}/>
  <Icon name="arrow-up" size={state.size} color={state.color}/>
  <Icon name="arrow-down" size={state.size} color={state.color}/>
  <Icon name="arrow-small-right" size={state.size} color={state.color}/>
  <Icon name="arrow-small-left" size={state.size} color={state.color}/>
  <Icon name="arrow-small-up" size={state.size} color={state.color}/>
  <Icon name="arrow-small-down" size={state.size} color={state.color}/>
  <Icon name="bank" size={state.size} color={state.color}/>
  <Icon name="calendar" size={state.size} color={state.color}/>
  <Icon name="card" size={state.size} color={state.color}/>
  <Icon name="case" size={state.size} color={state.color}/>
  <Icon name="check" size={state.size} color={state.color}/>
  <Icon name="clock" size={state.size} color={state.color}/>
  <Icon name="cross" size={state.size} color={state.color}/>
  <Icon name="dots-h" size={state.size} color={state.color}/>
  <Icon name="dots-v" size={state.size} color={state.color}/>
  <Icon name="download" size={state.size} color={state.color}/>
  <Icon name="envelope" size={state.size} color={state.color}/>
  <Icon name="eye-closed" size={state.size} color={state.color}/>
  <Icon name="eye-opened" size={state.size} color={state.color}/>
  <Icon name="file" size={state.size} color={state.color}/>
  <Icon name="filter" size={state.size} color={state.color}/>
  <Icon name="hamburger" size={state.size} color={state.color}/>
  <Icon name="location" size={state.size} color={state.color}/>
  <Icon name="login" size={state.size} color={state.color}/>
  <Icon name="logout" size={state.size} color={state.color}/>
  <Icon name="mobile" size={state.size} color={state.color}/>
  <Icon name="passport" size={state.size} color={state.color}/>
  <Icon name="phone" size={state.size} color={state.color}/>
  <Icon name="percent" size={state.size} color={state.color}/>
  <Icon name="play" size={state.size} color={state.color}/>
  <Icon name="plus" size={state.size} color={state.color}/>
  <Icon name="plus-circle" size={state.size} color={state.color}/>
  <Icon name="power" size={state.size} color={state.color}/>
  <Icon name="print" size={state.size} color={state.color}/>
  <Icon name="qiwi" size={state.size} color={state.color}/>
  <Icon name="receipt" size={state.size} color={state.color}/>
  <Icon name="refund" size={state.size} color={state.color}/>
  <Icon name="repeat" size={state.size} color={state.color}/>
  <Icon name="search" size={state.size} color={state.color}/>
  <Icon name="send" size={state.size} color={state.color}/>
  <Icon name="settings" size={state.size} color={state.color}/>
  <Icon name="share" size={state.size} color={state.color}/>
  <Icon name="star" size={state.size} color={state.color}/>
  <Icon name="terminal" size={state.size} color={state.color}/>
  <Icon name="terminal-client" size={state.size} color={state.color}/>
  <Icon name="transfer" size={state.size} color={state.color}/>
  <Icon name="user" size={state.size} color={state.color}/>
  <Icon name="security" size={state.size} color={state.color}/>
  <Icon name="success" size={state.size} color={state.color}/>
  <Icon name="reject" size={state.size} color={state.color}/>
  <Icon name="attention" size={state.size} color={state.color}/>
  <Icon name="waiting" size={state.size} color={state.color}/>
  <Icon name="backward" size={state.size} color={state.color}/>
  <Icon name="forward" size={state.size} color={state.color}/>
  <Icon name="sort-asc" size={state.size} color={state.color}/>
  <Icon name="sort-desc" size={state.size} color={state.color}/>
  <Icon name="facebook" size={state.size} color={state.color}/>
  <Icon name="instagram" size={state.size} color={state.color}/>
  <Icon name="ok" size={state.size} color={state.color}/>
  <Icon name="twitter" size={state.size} color={state.color}/>
  <Icon name="vk" size={state.size} color={state.color}/>
  <Icon name="youtube" size={state.size} color={state.color}/>
</Grid>
```

### Special 24 &times; 24

```jsx
<Grid columns={12} layout={[1]}>
  <Box width={6} height={6} cursor="pointer">
    <QuestionIcon/>
  </Box>
  <Box width={6} height={6} cursor="pointer" onClick={() => setState({filterIconActive: !state.filterIconActive})}>
    <FilterIcon active={state.filterIconActive}/>
  </Box>
  <Box width={6} height={6} cursor="pointer" onClick={() => setState({crossBurgerActive: !state.crossBurgerActive})}>
    <CrossBurger active={state.crossBurgerActive}/>
  </Box>
</Grid>
```

### Payment systems 48 &times; 24

```jsx
<Grid columns={8} layout={[1]}>
  <Box width={12} height={6}>
    <MastercardIcon/>
  </Box>
  <Box width={12} height={6}>
    <MirIcon/>
  </Box>
  <Box width={12} height={6}>
    <VisaIcon/>
  </Box>
</Grid>
```

### Security badges 64 &times; 24

```jsx
<Grid columns={8} layout={[1]}>
  <Box width={16} height={6}>
    <PciDssIcon/>
  </Box>
  <Box width={16} height={6}>
    <MirAcceptIcon/>
  </Box>
  <Box width={16} height={6}>
    <VisaVerifiedIcon/>
  </Box>
  <Box width={16} height={6}>
    <McscIcon/>
  </Box>
</Grid>
```
