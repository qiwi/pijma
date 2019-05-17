Единичный чекбокс

#### Состояния чекбоксов
```jsx
initialState = {checked: true};
<Box width={80}>
  <Spacer size="xxs">
    <Checkbox
      tabIndex={1}
      onChange={checked => setState({checked})}
      checked={state.checked}
      label="Выбранный чекбокс"
    />
    <Checkbox
      disabled={true}
      checked={true}
      label="Выбранный заблокированный"
    />
    <Checkbox
      disabled={true}
      label="Невыбранный заблокированный"
    />
  </Spacer>
</Box>
```
