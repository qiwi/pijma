```javascript
<DateRangePicker
  title={'title'}
  name="name"
  dateTo={dateTo}
  dateFrom={dateFrom}
  onChange={usePeriod}
  maxDate={new Date()}
  dayPickerProps={{
    initialMonth: new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
  }}
/>
```
