Переключатель

```jsx
initialState = {checked: true};
<Switcher
  onClick={() => setState({checked: !state.checked})}
  checked={state.checked}
  label={'Выбранный переключатель'}
/>
```

```jsx
<Switcher
  disabled={true}
  checked={true}
  label={'Выбранный заблокированный'}
/>
```

```jsx
initialState = {checked: false};
<Switcher
  onClick={() => setState({checked: !state.checked})}
  checked={state.checked}
  label={'Невыбранный переключатель'}
/>
```

```jsx
<Switcher
  disabled={true}
  checked={false}
  label={'Невыбранный заблокированный'}
/>
```
