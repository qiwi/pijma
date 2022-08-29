```javascript
const columns = [
    {
      id: '123',
      width: 28,
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      accessor: (originalRow) => {
        return {
          status: originalRow.status,
          isCaptured: originalRow.isCaptured,
        }
      },
      Cell: ({ value: { isCaptured, status: { value: status } } }) => {
        return <StatusIconWrapper>{getStatusIcon(status, isCaptured)}</StatusIconWrapper>
      },
    },
    {
      id: '1233',
      minWidth: 220,
      style: {
        paddingLeft: 0,
      },
      accessor: (originalRow) => {
        return {
          myItem: originalRow.myItem,
        }
      },
      Cell: ({ value: { myItem }}) => {
        return <div>{myItem}</div>
      },
    },
  ]

  <Table
    hideHeader
    onSelect={onSelect}
    data={fullData}
    columns={columns}
  />
```
