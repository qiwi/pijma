Единичный чекбокс

#### Состояния чекбоксов
```jsx
initialState = {checked: true};
<Block>
  <BlockContent>
    <Spacer>
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
  </BlockContent>
</Block>
```
