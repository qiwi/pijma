Переключатели - это элементы управления, которые по смыслу включают или выключают какую-нибудь опцию, то есть являются метафорой действия.

#### Состояния переключателя

```jsx
initialState = {checked: true};
<Block>
  <BlockContent>
    <Spacer>
      <Switch
        onChange={checked => setState({checked})}
        checked={state.checked}
        label="Выбранный переключатель"
      />
      <Switch
        disabled={true}
        checked={true}
        label="Выбранный заблокированный"
      />
      <Switch
        disabled={true}
        label="Невыбранный заблокированный"
      />
      <Switch
        stub
        checked={true}
        label=""
        onChange={() => {}}
      />
    </Spacer>
  </BlockContent>
</Block>
```

#### Инвертированный переключатель

```jsx
initialState = {checked: false};
<Block>
  <BlockContent>
    <Spacer>
      <Switch
        onChange={checked => setState({checked})}
        reverse={true}
        checked={state.checked}
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
```
