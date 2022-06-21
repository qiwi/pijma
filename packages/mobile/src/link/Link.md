Ссылки связывают страницы между собой. Обычно ссылка ведет на внутреннюю страницу самого сайта или на другой сайт. Если ссылка ведет на внешнюю страницу, окно открывается в новой вкладке.

```jsx
<Block>
  <BlockContent>
    <Spacer size="m">
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Link size="l" href="https://qiwi.com">
            Link L
          </Link>
        </FlexItem>
        <FlexItem width={0.5}>
          <Link size="l" href stub />
        </FlexItem>
      </Flex>
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Link href="https://qiwi.com" target="_blank">
            Link M
          </Link>
        </FlexItem>
        <FlexItem width={0.5}>
          <Link size="m" href stub />
        </FlexItem>
      </Flex>
      <Flex width={1}>
        <FlexItem width={0.5}>
          <Link
            size="s"
            href="https://qiwi.com"
            title="link s"
            onClick={() => alert('alert 2')}
          >
            Link S
          </Link>
        </FlexItem>
        <FlexItem width={0.5}>
          <Link size="s" href stub />
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```

## Inverse Links

```jsx
<Block bg="#2D3540">
  <BlockContent>
    <Flex justify="space-around" align="center" width={1}>
      <Link
        inverse
        size="l"
        bold
        href="https://qiwi.com"
        title="inverse link l"
        onClick={() => alert('alert 2')}
      >
        Inverse L
      </Link>
      <Link
        inverse
        size="m"
        bold
        href="https://qiwi.com"
        title="inverse link m"
        onClick={() => alert('alert 2')}
      >
        Inverse M
      </Link>
      <Link
        inverse
        size="s"
        bold
        href="https://qiwi.com"
        title="inverse link s"
        onClick={() => alert('alert 2')}
      >
        Inverse S
      </Link>
    </Flex>
  </BlockContent>
</Block>
```
