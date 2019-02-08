#### Ширина контейнера больше ширины рекапчи

```jsx
<Card bg="#eee" p={5}>
  <Flex justify="space-between" wrap="wrap">
    <Block>
      <Box p={5}>
        <Box width={90}>
          <ReCaptchaField
            siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
            value={state.value1}
            action={state.value1 ? <a href="javascript:void(0)" onClick={() => setState({value1: undefined})}>Сбросить</a> : null}
            onChange={(value1) => setState({value1})}
          />
        </Box>
      </Box>
    </Block>
    <Block>
      <Box p={5}>
        <Box width={90}>
          <ReCaptchaField
            siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
            value={state.value2}
            error="Кажется, вы робот"
            action={state.value2 ? <a href="javascript:void(0)" onClick={() => setState({value2: undefined})}>Сбросить</a> : null}
            onChange={(value2) => setState({value2})}
          />
        </Box>
      </Box>
    </Block>
  </Flex>
</Card>
```

#### Ширина контейнера меньше ширины рекапчи

```jsx
<Card bg="#eee" p={5}>
  <Flex justify="space-between" wrap="wrap">
    <Block>
      <Box p={5}>
        <Box width={60}>
          <ReCaptchaField
            siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
            value={state.value3}
            action={state.value3 ? <a href="javascript:void(0)" onClick={() => setState({value3: undefined})}>Сбросить</a> : null}
            onChange={(value3) => setState({value3})}
          />
        </Box>
      </Box>
    </Block>
    <Block>
      <Box p={5}>
        <Box width={60}>
          <ReCaptchaField
            siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
            value={state.value4}
            error="Кажется, вы робот"
            action={state.value4 ? <a href="javascript:void(0)" onClick={() => setState({value4: undefined})}>Сбросить</a> : null}
            onChange={(value4) => setState({value4})}
          />
        </Box>
      </Box>
    </Block>
  </Flex>
</Card>
```
