Переключатели - это элементы управления, которые включают или выключают ту или иную опцию. Подходят для случаев, когда у элемента может быть только два состояния.

Рекомендуем располагать в одном списке не более семи переключателей.

```jsx
initialState = {values: ['selected']};
<SwitchField
  title="Переключатели слева"
  hint={<QuestionIcon/>}
  options={[{
    label: 'Выбранный переключатель',
    value: 'selected',
    disabled: false,
  }, {
    label: 'Невыбранный переключатель',
    value: 'normal',
    disabled: false,
  }, {
    label: 'Заблокированный выбранный переключатель',
    value: 'selected-disabled',
    disabled: true,
  }, {
    label: 'Заблокированный переключатель',
    value: 'disabled',
    disabled: true,
  }]}
  values={state.values}
  onChange={(values) => setState({values})}
/>
```

```jsx
initialState = {values: ['selected']};
<Box width={100}>
  <SwitchField
    title="Переключатели справа"
    hint={<QuestionIcon/>}
    reverse={true}
    options={[{
      label: 'Выбранный переключатель',
      value: 'selected',
      disabled: false,
    }, {
      label: 'Невыбранный переключатель',
      value: 'normal',
      disabled: false,
    }, {
      label: 'Заблокированный выбранный переключатель',
      value: 'selected-disabled',
      disabled: true,
    }, {
      label: 'Заблокированный переключатель',
      value: 'disabled',
      disabled: true,
    }]}
    values={state.values}
    onChange={(values) => setState({values})}
  />
</Box>
```

```jsx
initialState = {values: ['selected']};
<SwitchField
  title="Переключатели с примечаниями"
  hint={<QuestionIcon/>}
  options={[{
    label: 'Выбранный переключатель',
    description:'Примечание к переключателю',
    value: 'selected',
    disabled: false,
  }, {
    label: 'Невыбранный переключатель',
    description:'Примечание к переключателю',
    value: 'normal',
    disabled: false,
  }, {
    label: 'Заблокированный выбранный переключатель',
    description:'Примечание к переключателю',
    value: 'selected-disabled',
    disabled: true,
  }, {
    label: 'Заблокированный переключатель',
    description:'Примечание к переключателю',
    value: 'disabled',
    disabled: true,
  }]}
  values={state.values}
  onChange={(values) => setState({values})}
/>
```
