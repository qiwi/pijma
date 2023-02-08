```jsx
<Flex data-testid="flex" maxWidth={190} p={5} css={{ backgroundColor: '#ccc' }}>
  <FlexItem
    data-testid="flex-item"
    width={1 / 3}
    p={5}
    css={{ backgroundColor: '#e6e6e6' }}
  >
    <Flex>
      <FlexItem
        data-testid="flex-item"
        width={0.5}
        p={5}
        css={{ backgroundColor: '#ccc' }}
      >
        1/6
      </FlexItem>
      <FlexItem
        data-testid="flex-item"
        width={0.5}
        p={5}
        css={{ backgroundColor: '#999' }}
      >
        1/6
      </FlexItem>
    </Flex>
  </FlexItem>
  <FlexItem
    data-tesid="flex-item"
    align="flex-start"
    width={1 / 3}
    p={5}
    css={{ backgroundColor: '#999' }}
  >
    1/3
  </FlexItem>
  <FlexItem
    data-tesid="flex-item"
    align="flex-end"
    width={1 / 3}
    p={5}
    css={{ backgroundColor: '#e6e6e6' }}
  >
    1/3
  </FlexItem>
</Flex>
```
