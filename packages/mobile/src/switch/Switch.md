Переключатели - это элементы управления, которые по смыслу включают или выключают какую-нибудь опцию, то есть являются метафорой действия.

#### Состояния переключателя
```jsx
initialState = {checked: true};
<Box width={120}>
  <Spacer size="xxs">
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
  </Spacer>
</Box>
```
#### Инвертированный переключатель

```jsx
initialState = {checked: false};
<Box width={80}>
  <Switch
    reverse={true}
    onChange={checked => setState({checked})}
    checked={state.checked}
    label="Невыбранный переключатель"
  />
</Box>
```
