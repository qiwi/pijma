```jsx
<Block>
  <BlockContent>
    <DatePicker
      title="Дата"
      format="dd.MM.yyyy"
      value={state.date}
      utils={new DateFnsCalendarUtils()}
      onChange={(date) => {
        if (date.toString() !== 'Invalid Date') {
          setState({date})
        }
      }}
    />
  </BlockContent>
</Block>
```