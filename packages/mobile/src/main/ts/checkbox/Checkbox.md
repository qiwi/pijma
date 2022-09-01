Единичный чекбокс

#### Состояния чекбоксов

```jsx
const [checked, setChecked] = React.useState(true)
return (
  <Block>
    <BlockContent>
      <Spacer>
        <Checkbox
          onChange={(checked) => setChecked(checked)}
          checked={checked}
          label="Выбранный чекбокс"
        />
        <Checkbox
          disabled={true}
          checked={true}
          label="Выбранный заблокированный"
        />
        <Checkbox disabled={true} label="Невыбранный заблокированный" />
        <Checkbox
          onChange={(checked) => setChecked(checked)}
          checked={checked}
          label={
            <Paragraph>
              Ознакомлен с <Link href="#" children="офертой" />
            </Paragraph>
          }
        />
      </Spacer>
    </BlockContent>
  </Block>
)
```
