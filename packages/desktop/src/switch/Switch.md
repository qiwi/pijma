Переключатели - это элементы управления, которые включают или выключают ту или иную опцию. Подходят для случаев, когда у элемента может быть только два состояния.

## Состояния элемента
```jsx
initialState = {checked: true};
<Box width={120}>
  <Spacer size="s">
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
## Расположение элемента

Переключатель может располагаться как слева от поясняющего текста, так и справа от него.

#### Слева от текста

```jsx
initialState = {checked: true};
<Box width={120}>
  <Spacer size="s">
    <Switch
      onChange={checked => setState({checked})}
      checked={state.checked}
      label="Слева от текста"
    />
    <Switch
      disabled={true}
      checked={true}
      label="Слева от текста"
    />
    <Switch
      disabled={true}
      label="Слева от текста"
    />
  </Spacer>
</Box>
```
#### Справа от текста

```jsx
initialState = {checked: true};
<Box width={44}>
  <Spacer size="s">
    <Switch
      onChange={checked => setState({checked})}
      reverse={true}
      checked={state.checked}
      label="Справа от текста"
    />
    <Switch
      reverse={true}
      disabled={true}
      checked={true}
      label="Справа от текста"
    />
    <Switch
      reverse={true}
      disabled={true}
      label="Справа от текста"
    />
  </Spacer>
</Box>
```