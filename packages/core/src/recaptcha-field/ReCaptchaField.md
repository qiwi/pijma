#### Ширина контейнера больше ширины рекапчи

```jsx
<Grid columns={2} layout={1}>
  <Block>
    <BlockContent>
      <ReCaptchaField
        siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
        value={state.value1}
        action={state.value1 ? <a href="javascript:void(0)" onClick={() => setState({value1: undefined})}>Сбросить</a> : null}
        onChange={(value1) => setState({value1})}
      />
    </BlockContent>
  </Block>
  <Block>
    <BlockContent>
      <ReCaptchaField
        siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
        value={state.value2}
        error="Кажется, вы робот"
        action={state.value2 ? <a href="javascript:void(0)" onClick={() => setState({value2: undefined})}>Сбросить</a> : null}
        onChange={(value2) => setState({value2})}
      />
    </BlockContent>
  </Block>
</Grid>
```

#### Ширина контейнера меньше ширины рекапчи

```jsx
<Grid columns={7} layout={[3,1,3]}>
  <Block>
    <BlockContent>
      <ReCaptchaField
        siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
        value={state.value3}
        action={state.value3 ? <a href="javascript:void(0)" onClick={() => setState({value3: undefined})}>Сбросить</a> : null}
        onChange={(value3) => setState({value3})}
      />
    </BlockContent>
  </Block>
  {' '}
  <Block>
    <BlockContent>
      <ReCaptchaField
        siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
        value={state.value4}
        error="Кажется, вы робот"
        action={state.value4 ? <a href="javascript:void(0)" onClick={() => setState({value4: undefined})}>Сбросить</a> : null}
        onChange={(value4) => setState({value4})}
      />
    </BlockContent>
  </Block>
</Grid>
```
