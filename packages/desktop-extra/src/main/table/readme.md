```javascript
const columns = [{
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
    }, {
      id: 'id1',
      width: 150,
      style: {
        paddingRight: 0,
      },
      accessor: 'createdAt',
      Cell: ({ value }) => <div>{value}</div>,
    }]

  <Table
    hideHeader
    onSelect={onSelect}
    data={fullData}
    columns={columns}
  />
```
