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
        <PaymentSystemIcon name="mastercard"/>
      </FlexItem>
      <FlexItem width={12} height={6} mr={6}>
        <PaymentSystemIcon name="mir"/>
      </FlexItem>
      <FlexItem width={12} height={6}>
        <PaymentSystemIcon name="visa"/>
      </FlexItem>
    </Flex>
    <Flex mt={6}>
      <FlexItem width={12} height={6} mr={6}>
        <PaymentSystemIcon name="mastercard" gray/>
      </FlexItem>
      <FlexItem width={12} height={6} mr={6}>
        <PaymentSystemIcon name="mir" gray/>
      </FlexItem>
      <FlexItem width={12} height={6}>
        <PaymentSystemIcon name="visa" gray/>
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
        <PaymentSecurityIcon name="pci-dss"/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="mir-accept"/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="visa-verified"/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="mastercard-id-check"/>
      </FlexItem>
      <FlexItem width={16} height={6}>
        <PaymentSecurityIcon name="apple-pay"/>
      </FlexItem>
    </Flex>
    <Flex mt={6}>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="pci-dss" gray/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="mir-accept" gray/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="visa-verified" gray/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="mastercard-id-check" gray/>
      </FlexItem>
      <FlexItem width={16} height={6}>
        <PaymentSecurityIcon name="apple-pay" gray/>
      </FlexItem>
    </Flex>
    <Flex mt={6}>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="pci-dss" stub/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="mir-accept" stub/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="visa-verified" stub/>
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon name="mastercard-id-check" stub/>
      </FlexItem>
      <FlexItem width={16} height={6}>
        <PaymentSecurityIcon name="apple-pay" stub/>
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
      <FlexItem width={37} height={11} mr={6}>
        <MobileAppIcon name="google"/>
      </FlexItem>
      <FlexItem width={37} height={11}>
        <MobileAppIcon name="apple"/>
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```
