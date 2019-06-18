Могут использоваться в единственном числе для отображения добавочного действия.

## Состояния
```jsx
initialState = {checked: true};
<Box width={80}>
  <Spacer size="s">
    <Checkbox
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
