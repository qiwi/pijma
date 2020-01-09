```jsx
<Block>
  <BlockContent>
    <DatePicker
      title="Дата"
      mask={[/[0-9]/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
      value={state.text}
      onSelectDate={(date) => setState({text: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`})}
    />
  </BlockContent>
</Block>
```