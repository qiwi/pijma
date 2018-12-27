Радиокнопки — это элементы управления, которые позволяют выбрать только один вариант из списка. Использовать радионопку в единственном числе не рекомендуется.

Размещайте в одном списке не более 7 радиокнопок. Для остальных случаев применяйте выпадающие списки.

```jsx
initialState = {value: 'selected'};
<RadioField
  title="Группа радиокнопок"
  hint={<QuestionIcon/>}
  options={[{
    label: 'Выбранная радиокнопка',
    value: 'selected',
    disabled: false,
  }, {
    label: 'Невыбранная радиокнопка',
    value: 'normal',
    disabled: false,
  }, {
    label: 'Заблокированная выбранная радиокнопка',
    value: 'selected',
    disabled: true,
  }, {
    label: 'Заблокированная радиокнопка',
    value: 'disabled',
    disabled: true,
  }]}
  value={state.value}
  onChange={(value) => setState({value})}
/>
```

```jsx
initialState = {value: 'selected'};
<RadioField
  title="Группа радиокнопок с примечаниями"
  hint={<QuestionIcon/>}
  options={[{
    label: 'Выбранная радиокнопка',
    description: 'Примечание к радиокнопке',
    value: 'selected',
    disabled: false,
  }, {
    label: 'Невыбранная радиокнопка',
    description: 'Примечание к радиокнопке',
    value: 'normal',
    disabled: false,
  }, {
    label: 'Заблокированная выбранная радиокнопка',
    description: 'Примечание к радиокнопке',
    value: 'selected',
    disabled: true,
  }, {
    label: 'Заблокированная радиокнопка',
    description: 'Примечание к радиокнопке',
    value: 'disabled',
    disabled: true,
  }]}
  value={state.value}
  onChange={(value) => setState({value})}
/>
```
