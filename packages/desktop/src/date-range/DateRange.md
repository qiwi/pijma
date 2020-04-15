```jsx
<Block>
  <BlockContent>
    <DateRange
      title="Дата"
      format="dd.MM.yyyy"
      value={state.date}
      valueTo={state.dateTo}
      utils={new DateFnsCalendarUtils()}
      onChange={(date, dateTo) => {
        if (date === null || date.toString() !== 'Invalid Date') {
          setState({
            date,
            dateTo: dateTo === null || (date && dateTo.toString()) !== 'Invalid Date' ? dateTo : undefined
          })
        }
      }}
    />
  </BlockContent>
</Block>
```