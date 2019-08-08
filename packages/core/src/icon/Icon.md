```jsx noeditor
<Grid columns={8} layout={1} gutter={24}>
  {Object.keys(IconPaths).map((name, i) => (
    <Flex key={i} direction="column" align="center" mb={6}>
      <FlexItem mb={4} shrink={0}>
        <Icon name={name}/>
      </FlexItem>
      <FlexItem>
        <Paragraph size="s" align="center">
          {name}
        </Paragraph>
      </FlexItem>
    </Flex>
  ))}
</Grid>
```

### Icon

```jsx
<Icon name="qiwi"/>
```

### Special

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

### Payment systems

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

### Security badges

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
