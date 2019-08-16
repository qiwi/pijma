Чекбоксы — это элементы управления, которые позволяют выбрать несколько вариантов из списка. Используйте в одном списке не более 7 чекбоксов. Для остальных случаев применяйте выпадающие списки.

```jsx
initialState = {values: ['selected']};
<Block>
  <BlockContent>
    <CheckboxField
      title="Группа чекбоксов"
      hint={<QuestionIcon/>}
      options={[{
        label: 'Выбранный чекбокс',
        value: 'selected',
        disabled: false,
      }, {
        label: 'Невыбранный чекбокс',
        value: 'normal',
        disabled: false,
      }, {
        label: 'Заблокированный выбранный чекбокс',
        value: 'selected-disabled',
        disabled: true,
      }, {
        label: 'Заблокированный чекбокс',
        value: 'disabled',
        disabled: true,
      }]}
      values={state.values}
      onChange={(values) => setState({values})}
    />
  </BlockContent>
</Block>
```

```jsx
initialState = {values: ['selected']};
<Block>
  <BlockContent>
    <CheckboxField
      title="Группа чекбоксов с примечаниями"
      hint={<QuestionIcon/>}
      options={[{
        label: 'Выбранный чекбокс',
        description:'Примечание к чекбоксу',
        value: 'selected',
        disabled: false,
      }, {
        label: 'Невыбранный чекбокс',
        description:'Примечание к чекбоксу',
        value: 'normal',
        disabled: false,
      }, {
        label: 'Заблокированный выбранный чекбокс',
        description:'Примечание к чекбоксу',
        value: 'selected-disabled',
        disabled: true,
      }, {
        label: 'Заблокированный чекбокс',
        description:'Примечание к чекбоксу',
        value: 'disabled',
        disabled: true,
      }]}
      values={state.values}
      onChange={(values) => setState({values})}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <CheckboxField
      options={[]}
      values={[]}
      onChange={() => {}}
      stub
    />
  </BlockContent>
</Block>
```
