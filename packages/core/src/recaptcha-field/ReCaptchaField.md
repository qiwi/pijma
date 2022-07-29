#### Ширина контейнера больше ширины рекапчи

```jsx {"props":{"data-action-states":"[{\\"action\\":\\"none\\",\\"wait\\":2000}]"}}
const [value1, setValue1] = React.useState(undefined)
const [value2, setValue2] = React.useState(undefined)

;<Grid columns={2} layout={1}>
  <Block>
    <BlockContent>
      <ReCaptchaField
        siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
        value={value1}
        action={
          value1 ? (
            <a href="javascript:void(0)" onClick={() => setValue1(undefined)}>
              Сбросить
            </a>
          ) : null
        }
        onChange={(value1) => setValue1(value1)}
      />
    </BlockContent>
  </Block>
  <Block>
    <BlockContent>
      <ReCaptchaField
        siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
        value={value2}
        error="Кажется, вы робот"
        action={
          value2 ? (
            <a href="javascript:void(0)" onClick={() => setValue2(undefined)}>
              Сбросить
            </a>
          ) : null
        }
        onChange={(value2) => setValue2(value2)}
      />
    </BlockContent>
  </Block>
</Grid>
```

#### Ширина контейнера меньше ширины рекапчи

```jsx {"props":{"data-action-states":"[{\\"action\\":\\"none\\",\\"wait\\":2000}]"}}
const [value3, setValue3] = React.useState(undefined)
const [value4, setValue4] = React.useState(undefined)

;<Grid columns={7} layout={[3, 1, 3]}>
  <Block>
    <BlockContent>
      <ReCaptchaField
        siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
        value={value3}
        action={
          value3 ? (
            <a href="javascript:void(0)" onClick={() => setValue3(undefined)}>
              Сбросить
            </a>
          ) : null
        }
        onChange={(value3) => setValue3(value3)}
      />
    </BlockContent>
  </Block>{' '}
  <Block>
    <BlockContent>
      <ReCaptchaField
        siteKey="6Le0iiETAAAAAPNu6albLuW5O2Zz7FO8N95lisA1"
        value={value4}
        error="Кажется, вы робот"
        action={
          value4 ? (
            <a href="javascript:void(0)" onClick={() => setValue4(undefined)}>
              Сбросить
            </a>
          ) : null
        }
        onChange={(value4) => setValue4(value4)}
      />
    </BlockContent>
  </Block>
</Grid>
```
