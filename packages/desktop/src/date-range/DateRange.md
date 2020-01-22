```jsx
<Block>
  <BlockContent>
    <DateRange
      title="Дата"
      format="dd.MM.yyyy"
      value={state.date}
      onChange={(date) => {
        if (date.toString() !== 'Invalid Date') {
          setState({date})
        }
      }}
    />
  </BlockContent>
</Block>
```