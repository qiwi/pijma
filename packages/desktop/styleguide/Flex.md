```jsx
<Flex maxWidth={190} p={5} css={{backgroundColor: '#ccc'}}>
  <FlexItem width={1/3} p={5} css={{backgroundColor: '#e6e6e6'}}>
    <Flex>
      <FlexItem width={0.5} p={5} css={{backgroundColor: '#ccc'}}>
        1/6
      </FlexItem>
      <FlexItem width={0.5} p={5} css={{backgroundColor: '#999'}}>
        1/6
      </FlexItem>
    </Flex>
  </FlexItem>
  <FlexItem align="flex-start" width={1/3} p={5} css={{backgroundColor: '#999'}}>
    1/3
  </FlexItem>
  <FlexItem align="flex-end" width={1/3} p={5} css={{backgroundColor: '#e6e6e6'}}>
    1/3
  </FlexItem>
</Flex>
```
