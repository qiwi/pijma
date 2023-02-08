Радиокнопки — это элементы управления, которые позволяют выбрать только один вариант из списка. Использовать радионопку в единственном числе не рекомендуется.

Размещайте в одном списке не более 7 радиокнопок. Для остальных случаев применяйте выпадающие списки.

```jsx
const [value, setValue] = React.useState('selected')
return (
  <Block>
    <BlockContent>
      <RadioField
        data-testid="radio-field"
        title="Группа радиокнопок"
        hint={<QuestionIcon />}
        options={[
          {
            label: 'Выбранная радиокнопка',
            value: 'selected',
            disabled: false,
          },
          {
            label: 'Невыбранная радиокнопка',
            value: 'normal',
            disabled: false,
          },
          {
            label: 'Заблокированная выбранная радиокнопка',
            value: 'selected',
            disabled: true,
          },
          {
            label: 'Заблокированная радиокнопка',
            value: 'disabled',
            disabled: true,
          },
        ]}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </BlockContent>
  </Block>
)
```

```jsx
const [value, setValue] = React.useState('selected')
return (
  <Block>
    <BlockContent>
      <RadioField
        data-testid="radio-field"
        title="Группа радиокнопок с примечаниями"
        hint={<QuestionIcon />}
        options={[
          {
            label: 'Выбранная радиокнопка',
            description: 'Примечание к радиокнопке',
            value: 'selected',
            disabled: false,
          },
          {
            label: 'Невыбранная радиокнопка',
            description: 'Примечание к радиокнопке',
            value: 'normal',
            disabled: false,
          },
          {
            label: 'Заблокированная выбранная радиокнопка',
            description: 'Примечание к радиокнопке',
            value: 'selected',
            disabled: true,
          },
          {
            label: 'Заблокированная радиокнопка',
            description: 'Примечание к радиокнопке',
            value: 'disabled',
            disabled: true,
          },
        ]}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </BlockContent>
  </Block>
)
```

```jsx
<Block>
  <BlockContent>
    <RadioField
      data-testid="no"
      stub
      options={[]}
      value={null}
      onChange={() => {}}
    />
  </BlockContent>
</Block>
```
