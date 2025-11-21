```jsx noeditor
<Block>
  <BlockContent>
    <Flex wrap="wrap">
      {Object.keys(IconPaths).map((name, i) => (
        <Flex
          width={25}
          key={i}
          direction="column"
          align="center"
          my={3}
          mx={5}
        >
          <FlexItem mb={4} shrink={0}>
            <Icon data-testid="icon" name={name} />
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
    <Icon data-testid="icon" name="qiwi" />
  </BlockContent>
</Block>
```

### Special

```jsx
const [filterIconActive, setFilterIconActive] = React.useState(false)
const [crossBurgerActive, setCrossBurgerActive] = React.useState(false)
const [feedIconActive, setFeedIconActive] = React.useState(false)
return (
  <Block>
    <BlockContent>
      <Flex>
        <FlexItem width={6} height={6} mr={6} cursor="pointer">
          <QuestionIcon data-testid="icon" />
        </FlexItem>
        <FlexItem
          width={6}
          height={6}
          mr={6}
          cursor="pointer"
          onClick={() => setFilterIconActive(!filterIconActive)}
        >
          <FilterIcon data-testid="icon" active={filterIconActive} />
        </FlexItem>
        <FlexItem
          width={6}
          height={6}
          mr={6}
          cursor="pointer"
          onClick={() => setCrossBurgerActive(!crossBurgerActive)}
        >
          <CrossBurger active={crossBurgerActive} />
        </FlexItem>
        <FlexItem
          width={6}
          height={6}
          mr={6}
          cursor="pointer"
          onClick={() => setFeedIconActive(!feedIconActive)}
        >
          <FeedIcon data-testid="icon" active={feedIconActive} />
        </FlexItem>
        <FlexItem
          width={6}
          height={6}
        >
          <CircleBellIcon data-testid="icon" color="#865ED3" />
        </FlexItem>
      </Flex>
    </BlockContent>
  </Block>
)
```

### Payment systems

```jsx
<Block>
  <BlockContent>
    <Flex>
      <FlexItem width={12} height={6} mr={6}>
        <PaymentSystemIcon data-testid="icon" name="mastercard" />
      </FlexItem>
      <FlexItem width={12} height={6} mr={6}>
        <PaymentSystemIcon data-testid="icon" name="mir" />
      </FlexItem>
      <FlexItem width={12} height={6}>
        <PaymentSystemIcon data-testid="icon" name="visa" />
      </FlexItem>
    </Flex>
    <Flex mt={6}>
      <FlexItem width={12} height={6} mr={6}>
        <PaymentSystemIcon data-testid="icon" name="mastercard" gray />
      </FlexItem>
      <FlexItem width={12} height={6} mr={6}>
        <PaymentSystemIcon data-testid="icon" name="mir" gray />
      </FlexItem>
      <FlexItem width={12} height={6}>
        <PaymentSystemIcon data-testid="icon" name="visa" gray />
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
        <PaymentSecurityIcon data-testid="icon" name="pci-dss" />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="mir-accept" />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="visa-verified" />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="mastercard-id-check" />
      </FlexItem>
      <FlexItem width={16} height={6}>
        <PaymentSecurityIcon data-testid="icon" name="apple-pay" />
      </FlexItem>
    </Flex>
    <Flex mt={6}>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="pci-dss" gray />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="mir-accept" gray />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="visa-verified" gray />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon
          data-testid="icon"
          name="mastercard-id-check"
          gray
        />
      </FlexItem>
      <FlexItem width={16} height={6}>
        <PaymentSecurityIcon data-testid="icon" name="apple-pay" gray />
      </FlexItem>
    </Flex>
    <Flex mt={6}>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="pci-dss" stub />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="mir-accept" stub />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon data-testid="icon" name="visa-verified" stub />
      </FlexItem>
      <FlexItem width={16} height={6} mr={2}>
        <PaymentSecurityIcon
          data-testid="icon"
          name="mastercard-id-check"
          stub
        />
      </FlexItem>
      <FlexItem width={16} height={6}>
        <PaymentSecurityIcon data-testid="icon" name="apple-pay" stub />
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
        <MobileAppIcon data-testid="icon" name="google" />
      </FlexItem>
      <FlexItem width={37} height={11} mr={6}>
        <MobileAppIcon data-testid="icon" name="apple" />
      </FlexItem>
      <FlexItem width={37} height={11} mr={6}>
        <MobileAppIcon data-testid="icon" name="huawei" />
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```
