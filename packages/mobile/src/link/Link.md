Ссылки связывают страницы между собой. Обычно ссылка ведет на внутреннюю страницу самого сайта или на другой сайт. Если ссылка ведет на внешнюю страницу, окно открывается в новой вкладке.

```jsx
{applyDefaultClickHandler((href, target) => window.open(href, target || '_self'))}
<Spacer size="xl">
  <Flex align="baseline">
    <FlexItem pr={4}>
      <Link size="l" href="https://qiwi.com">Link L</Link>  
    </FlexItem>
    <FlexItem pr={4}>
      <Link href="https://qiwi.com" target="_blank">Link M</Link>
    </FlexItem>
    <FlexItem pr={4}>
      <Link size="s" href="https://qiwi.com" title="link s" onClick={() => alert('alert 2')}>Link S</Link>  
    </FlexItem>
  </Flex>
</Spacer>
```
