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
          data-testid="checkbox"
          label="Выбранный чекбокс"
        />
        <Checkbox
          disabled={true}
          checked={true}
          data-testid="checkbox"
          label="Выбранный заблокированный"
        />
        <Checkbox disabled={true} label="Невыбранный заблокированный" />
        <Checkbox
          onChange={(checked) => setChecked(checked)}
          checked={checked}
          data-testid="checkbox"
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
