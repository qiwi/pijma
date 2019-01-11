```css static
font-family: Museo Sans
font-size: 14px
line-height: 20px
font-weight: 700
letter-spacing: 1.5
```

```jsx
<Flex>
  <FlexItem>
    <Spacer size="m">
      <Caption>Caption Gray</Caption>
      <Caption color="default">Caption Black</Caption>
    </Spacer>
  </FlexItem>
  <FlexItem>
    <Box ml={5}>
      <Spacer size="m">
        <Caption placeholder/>
        <Caption placeholder/>
      </Spacer>
    </Box>
  </FlexItem>
</Flex>
```
