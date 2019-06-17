На сайте используется два типа ссылок — контентные и навигационные.

Контентные ссылки обычно ведут на внутреннюю страницу qiwi.com или на другой сайт. Когда ссылка ведет на внешнюю страницу, окно открывается в новой вкладке.

Иногда контентные ссылки выступают в роли текстовых кнопок.
Ссылки дублируют размеры и стили основного текста.

```jsx
<Spacer size="l">
    <FlexItem pr={4}>
      <Link size="l" href="https://qiwi.com">Link L</Link>  
    </FlexItem>
    <FlexItem pr={4}>
      <Link href="https://qiwi.com" target="_blank">Link M</Link>
    </FlexItem>
    <FlexItem pr={4}>
      <Link size="s" href="https://qiwi.com" title="link s" onClick={() => alert('alert 2')}>Link S</Link> 
    </FlexItem>
</Spacer>
```