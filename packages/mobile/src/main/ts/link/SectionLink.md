```jsx
<Block>
  <BlockContent>
    <Flex align="baseline">
      <FlexItem pr={4}>
        <SectionLink href="//qiwi.com" target="_blank">
          {({ active, focus, hover }) => (
            <Box p={2}>
              <Paragraph children="href" />
            </Box>
          )}
        </SectionLink>
      </FlexItem>
      <FlexItem>
        <SectionLink active href="//qiwi.com" target="_blank">
          {({ active, focus, hover }) => (
            <Box p={2}>
              <Paragraph children="href" />
            </Box>
          )}
        </SectionLink>
      </FlexItem>
    </Flex>
  </BlockContent>
</Block>
```
