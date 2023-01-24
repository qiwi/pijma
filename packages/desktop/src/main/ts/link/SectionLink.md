```jsx
<Block>
  <BlockContent>
    <Flex align="baseline">
      <FlexItem pr={4}>
        <SectionLink
          data-testid="section-link"
          href="//qiwi.com"
          target="_blank"
        >
          {({ active, focus, hover }) => (
            <Box p={2}>
              <Paragraph children="href" />
            </Box>
          )}
        </SectionLink>
      </FlexItem>
      <FlexItem>
        <SectionLink
          data-testid="section-link"
          active
          href="//qiwi.com"
          target="_blank"
        >
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
