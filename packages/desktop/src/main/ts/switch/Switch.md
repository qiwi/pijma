Переключатели - это элементы управления, которые по смыслу включают или выключают какую-нибудь опцию, то есть являются метафорой действия.

#### Состояния переключателя

```jsx
const [checked, setChecked] = React.useState(true)
return (
  <Block>
    <BlockContent>
      <Spacer>
        <Switch
          onChange={(checked) => setChecked(checked)}
          checked={checked}
          label="Выбранный переключатель"
        />
        <Switch
          disabled={true}
          checked={true}
          label="Выбранный заблокированный"
        />
        <Switch disabled={true} label="Невыбранный заблокированный" />
        <Switch loading checked={checked} label="Выполнение запроса" />
        <Switch stub checked={true} label="" onChange={() => {}} />
      </Spacer>
    </BlockContent>
  </Block>
)
```

#### Инвертированный переключатель

```jsx
const [checked, setChecked] = React.useState(false)
return (
  <Block>
    <BlockContent>
      <Spacer>
        <Switch
          onChange={(checked) => setChecked(checked)}
          reverse={true}
          checked={checked}
          label="Выбранный переключатель"
        />
        <Switch
          reverse={true}
          disabled={true}
          checked={true}
          label="Выбранный заблокированный"
        />
        <Switch
          reverse={true}
          disabled={true}
          label="Невыбранный заблокированный"
        />
        <Switch loading reverse checked={checked} label="Выполнение запроса" />
        <Switch
          stub
          reverse={true}
          checked={true}
          label=""
          onChange={() => {}}
        />
      </Spacer>
    </BlockContent>
  </Block>
)
```
