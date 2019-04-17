Переключатели - это элементы управления, которые по смыслу включают или выключают какую-нибудь опцию, то есть являются метафорой действия.

#### Состояния переключателя
```jsx
initialState = {checked: true};
<Box width={80}>
  <Checkbox
    onClick={() => setState({checked: !state.checked})}
    checked={state.checked}
    label={'Выбранный переключатель'}
  />
  <Box mt={4}>
    <Checkbox
      disabled={true}
      checked={true}
      label={'Выбранный заблокированный'}
    />
  </Box>
  <Box mt={4}>
    <Checkbox
      disabled={true}
      label={'Невыбранный заблокированный'}
    />
  </Box>
</Box>
```
#### Переключатель с инвертированным порядком

```jsx
initialState = {checked: false};
<Checkbox
  reverse={true}
  onClick={() => setState({checked: !state.checked})}
  checked={state.checked}
  label={'Невыбранный переключатель'}
/>
```
