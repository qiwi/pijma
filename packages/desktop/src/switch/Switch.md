Переключатели - это элементы управления, которые по смыслу включают или выключают какую-нибудь опцию, то есть являются метафорой действия.

#### Состояния переключателя
```jsx
initialState = {checked: true};
<Box width={120}>
  <Switch
    onClick={() => setState({checked: !state.checked})}
    checked={state.checked}
    label={'Выбранный переключатель'}
  />
  <Box mt={4}>
    <Switch
      disabled={true}
      checked={true}
      label={'Выбранный заблокированный'}
    />
  </Box>
  <Box mt={4}>
    <Switch
      disabled={true}
      label={'Невыбранный заблокированный'}
    />
  </Box>
</Box>
```
#### Инвертированный переключатель

```jsx
initialState = {checked: false};
<Box width={80}>
  <Switch
    reverse={true}
    onClick={() => setState({checked: !state.checked})}
    checked={state.checked}
    label={'Невыбранный переключатель'}
  />
</Box>
```
