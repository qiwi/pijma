```jsx
<Spacer size="xl">
  <Flex align="baseline">
    <FlexItem pr={4}>
      <FooterLink size="l" href="https://qiwi.com">Link L</FooterLink>  
    </FlexItem>
    <FlexItem pr={4}>
      <FooterLink href="https://qiwi.com" target="_blank">Link M</FooterLink>
    </FlexItem>
    <FlexItem pr={4}>
      <FooterLink size="s" href="https://qiwi.com" title="link s" onClick={() => alert('alert 2')}>Link S</FooterLink>  
    </FlexItem>
  </Flex>
</Spacer>
```
