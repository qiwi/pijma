```jsx noeditor
<Block>
  <BlockContent>
    <Flex wrap="wrap">
      {Object.keys(IconPaths).map((name, i) => (
        <Flex width={25} key={i} direction="column" align="center" my={3} mx={5}>
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
    </Flex>
  </BlockContent>
</Block>
```

### Icon

```jsx
<Block>
  <BlockContent>
    <Icon name="qiwi"/>
  </BlockContent>
</Block>
```

### Special

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem width={6} height={6} mr={6} cursor="pointer">
        <QuestionIcon/>
      </FlexItem>
      <FlexItem width={6} height={6} mr={6} cursor="pointer" onClick={() => setState({filterIconActive: !state.filterIconActive})}>
        <FilterIcon active={state.filterIconActive}/>
      </FlexItem>
      <FlexItem width={6} height={6} cursor="pointer" onClick={() => setState({crossBurgerActive: !state.crossBurgerActive})}>
        <CrossBurger active={state.crossBurgerActive}/>
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

### Payment systems

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem width={12} height={6} mr={6}>
        <MastercardIcon/>
      </FlexItem>
      <FlexItem width={12} height={6} mr={6}>
        <MirIcon/>
      </FlexItem>
      <FlexItem width={12} height={6}>
        <VisaIcon/>
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

### Security badges

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem width={16} height={6} mr={2}>
        <PciDssIcon/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <MirAcceptIcon/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <VisaVerifiedIcon/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <MscIdIcon/>
      </FlexItem>
      <FlexItem width={16} height={6}>
        <McscIcon/>
      </FlexItem>
    </Flex>
    <Flex mt={4}>
      <FlexItem width={16} height={6} mr={2}>
        <PciDssIcon gray={false}/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <MirAcceptIcon gray={false}/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <VisaVerifiedIcon gray={false}/>
      </FlexItem>
      <FlexItem width={16} height={6}>
        <MscIdIcon gray={false}/>
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```

### Mobile apps

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem width={36} height={11} mr={6}>
        <GooglePlayIcon/>
      </FlexItem>
      <FlexItem width={36} height={11}>
        <AppStoreIcon/>
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```
