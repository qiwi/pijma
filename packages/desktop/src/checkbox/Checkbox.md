Единичный чекбокс

#### Состояния чекбоксов
```jsx
initialState = {checked: true};
<Box width={80}>
  <Checkbox
    tabIndex={1}
    onChange={() => setState({checked: !state.checked})}
    checked={state.checked}
    label={'Выбранный чекбокс'}
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
