Чекбоксы — это элементы управления, которые позволяют выбрать несколько вариантов из списка. Используйте в одном списке не более 7 чекбоксов. Для остальных случаев применяйте выпадающие списки.

```jsx
const [values, setValues] = React.useState(['selected'])
return (
  <Block>
    <BlockContent>
      <CheckboxField
        data-testid="checkbox-field"
        title="Группа чекбоксов"
        hint={<QuestionIcon />}
        options={[
          {
            label: 'Выбранный чекбокс',
            value: 'selected',
            disabled: false,
          },
          {
            label: 'Невыбранный чекбокс',
            value: 'normal',
            disabled: false,
          },
          {
            label: 'Заблокированный выбранный чекбокс',
            value: 'selected-disabled',
            disabled: true,
          },
          {
            label: 'Заблокированный чекбокс',
            value: 'disabled',
            disabled: true,
          },
        ]}
        values={values}
        onChange={(values) => setValues(values)}
      />
    </BlockContent>
  </Block>
)
```

```jsx
const [values, setValues] = React.useState(['selected'])
return (
  <Block>
    <BlockContent>
      <CheckboxField
        data-testid="checkbox-field"
        title="Группа чекбоксов с примечаниями"
        hint={<QuestionIcon />}
        options={[
          {
            label: 'Выбранный чекбокс',
            description: 'Примечание к чекбоксу',
            value: 'selected',
            disabled: false,
          },
          {
            label: 'Невыбранный чекбокс',
            description: 'Примечание к чекбоксу',
            value: 'normal',
            disabled: false,
          },
          {
            label: 'Заблокированный выбранный чекбокс',
            description: 'Примечание к чекбоксу',
            value: 'selected-disabled',
            disabled: true,
          },
          {
            label: 'Заблокированный чекбокс',
            description: 'Примечание к чекбоксу',
            value: 'disabled',
            disabled: true,
          },
        ]}
        values={values}
        onChange={(values) => setValues(values)}
      />
    </BlockContent>
  </Block>
)
```

```jsx
<Block>
  <BlockContent>
    <CheckboxField
      data-testid="no"
      options={[]}
      values={[]}
      onChange={() => {}}
      stub
    />
  </BlockContent>
</Block>
```
