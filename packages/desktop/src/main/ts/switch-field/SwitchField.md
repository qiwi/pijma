Переключатели — это элементы управления, которые позволяют выбрать несколько вариантов из списка. Используйте в одном списке не более 7 переключателей. Для остальных случаев применяйте выпадающие списки.

```jsx
const [values, setValues] = React.useState(['selected'])
return (
  <Block>
    <BlockContent>
      <SwitchField
        data-testid="switch-field"
        title="Группа переключателей"
        hint={<QuestionIcon />}
        options={[
          {
            label: 'Выбранный переключатель',
            value: 'selected',
            disabled: false,
          },
          {
            label: 'Невыбранный переключатель',
            value: 'normal',
            disabled: false,
          },
          {
            label: 'Заблокированный выбранный переключатель',
            value: 'selected-disabled',
            disabled: true,
          },
          {
            label: 'Заблокированный переключатель',
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
    <SwitchField
      data-testid="stub"
      stub
      options={[]}
      values={[]}
      onChange={() => {}}
    />
  </BlockContent>
</Block>
```

```jsx
const [values, setValues] = React.useState(['selected'])
return (
  <Block>
    <BlockContent>
      <SwitchField
        data-testid="switch-field"
        title="Группа инвертированных переключателей"
        hint={<QuestionIcon />}
        reverse={true}
        options={[
          {
            label: 'Выбранный переключатель',
            value: 'selected',
            disabled: false,
          },
          {
            label: 'Невыбранный переключатель',
            value: 'normal',
            disabled: false,
          },
          {
            label: 'Заблокированный выбранный переключатель',
            value: 'selected-disabled',
            disabled: true,
          },
          {
            label: 'Заблокированный переключатель',
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
    <SwitchField
      data-testid="stub"
      stub
      reverse
      options={[]}
      values={[]}
      onChange={() => {}}
    />
  </BlockContent>
</Block>
```

```jsx
const [values, setValues] = React.useState(['selected'])
return (
  <Block>
    <BlockContent>
      <SwitchField
        data-testid="switch-field"
        title="Группа переключателей с примечаниями"
        hint={<QuestionIcon />}
        options={[
          {
            label: 'Выбранный переключатель',
            description: 'Примечание к переключателю',
            value: 'selected',
            disabled: false,
          },
          {
            label: 'Невыбранный переключатель',
            description: 'Примечание к переключателю',
            value: 'normal',
            disabled: false,
          },
          {
            label: 'Заблокированный выбранный переключатель',
            description: 'Примечание к переключателю',
            value: 'selected-disabled',
            disabled: true,
          },
          {
            label: 'Заблокированный переключатель',
            description: 'Примечание к переключателю',
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
