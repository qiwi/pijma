```jsx
const [code, setCode] = React.useState(['', '', '', '', '']);

<Block>
  <BlockContent>
    <CodeField
      length={5}
      value={code}
      onChange={setCode}
    />
  </BlockContent>
</Block>
```

### Stub

```jsx
<Block>
  <BlockContent>
    <CodeField
      stub
      length={5}
      value={['', '', '', '', '']}
    />
  </BlockContent>
</Block>
```

### Error

```jsx
<Block>
  <BlockContent>
    <CodeField
      length={5}
      value={['1', '2', '3', '4', '5']}
      disabled
      error="Error"
    />
  </BlockContent>
</Block>
```

### Loading

```jsx
<Block>
  <BlockContent>
    <CodeField
      length={5}
      value={['1', '2', '3', '4', '5']}
      loading
    />
  </BlockContent>
</Block>
```

#### Example

```jsx
const [code, setCode] = React.useState(['', '', '', '']);
const [stub, setStub] = React.useState(false)
const [error, setError] = React.useState(undefined)
const animation = keyframes({
  '0%': {
    opacity: '0',
  },
  '100%': {
    opacity: '100%',
  },
})
const simulateQuery = (value) => {
  setStub(true)
  setError(undefined)
  setTimeout(() => {
    if (value === '0000') {
      setCode(['', '', '', ''])
      setStub(false)
    } else {
      setCode(['', '', '', ''])
      setError(<Box css={{
        animation: `${animation} 200ms ease-in-out`
      }}>Неверный код, попробуйте ещё раз</Box>)
      setStub(false)
    }
  }, 1800)
}
<Card width={96} align="center">
  <Block>
    <BlockContent>
      <Flex minHeight={133} justify="space-between" direction="column">
        <FlexItem>
          <Spacer size="l">
            <Heading size="2">
              Введите<br/>код из SMS
            </Heading>
            <Paragraph>
              Код отправлен на номер<br/>+7 000 000-00-00
            </Paragraph>
            <Box width={41}>
              <CodeField
                type="tel"
                length={4}
                loading={stub}
                error={error}
                value={code}
                onChange={setCode}
                onReady={simulateQuery}
              />
            </Box>
          </Spacer>
        </FlexItem>
        <FlexItem>
          <Paragraph>
            Запросить код повторно<br/>через 120 секунд
          </Paragraph>
        </FlexItem>
      </Flex>
    </BlockContent>
  </Block>
</Card>
```
