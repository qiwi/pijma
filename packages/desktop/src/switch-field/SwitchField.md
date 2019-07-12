Переключатели — это элементы управления, которые позволяют выбрать несколько вариантов из списка. Используйте в одном списке не более 7 переключателей. Для остальных случаев применяйте выпадающие списки.

```jsx
initialState = {values: ['selected']};
<Spacer size="l">
  <SwitchField
    title="Группа переключателей"
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
  <SwitchField
    stub
    options={[]}
    values={[]}
    onChange={() => {}}
  />
</Spacer>
```

```jsx
initialState = {values: ['selected']};
<Box width={110}>
  <Spacer size="l">
    <SwitchField
      title="Группа инвертированных переключателей"
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
    <SwitchField
      stub
      reverse
      options={[]}
      values={[]}
      onChange={() => {}}
    />
  </Spacer>
</Box>
```

```jsx
initialState = {values: ['selected']};
<SwitchField
  title="Группа переключателей с примечаниями"
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
