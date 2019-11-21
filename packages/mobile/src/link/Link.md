Ссылки связывают страницы между собой. Обычно ссылка ведет на внутреннюю страницу самого сайта или на другой сайт. Если ссылка ведет на внешнюю страницу, окно открывается в новой вкладке.

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Link size="l" href="https://qiwi.com">Link L</Link>  
        </FlexItem>
        <FlexItem width={0.5}>
          <Link size="l" href stub/>
        </FlexItem>
      </Flex>
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Link href="https://qiwi.com" target="_blank">Link M</Link>
        </FlexItem>
        <FlexItem width={0.5}>
          <Link size="m" href stub/>
        </FlexItem>
      </Flex>
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Link size="s" href="https://qiwi.com" title="link s" onClick={() => alert('alert 2')}>Link S</Link> 
        </FlexItem>
        <FlexItem width={0.5}>
          <Link size="s" href stub/>
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```
