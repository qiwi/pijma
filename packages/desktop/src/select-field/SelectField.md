```jsx
const [value, setValue] = React.useState({id: undefined})
const equals = (a, b) => a.id === b.id;
const items = [
  {
    text: 'Option 1',
    value: {
      id: 1,
    }
  },
  {
    text: 'Option 2',
    value: {
      id: 2,
    }
  },
  {
    text: 'Option 3',
    value: {
      id: 3,
    }
  },
  {
    text: 'Option 4',
    value: {
      id: 4,
    }
  },
  {
    text: 'Option 5',
    value: {
      id: 5,
    }
  },
  {
    text: 'Option 6',
    value: {
      id: 6,
    }
  },
  {
    text: 'Option 7',
    value: {
      id: 7,
    }
  },
  {
    text: 'Option 8',
    value: {
      id: 8,
    }
  },
  {
    text: 'Option 9',
    value: {
      id: 9,
    }
  },
  {
    text: 'Option 10',
    value: {
      id: 10,
    }
  },
];

<Grid columns={3} layout={[1]}>
  <Box>
    <Caption>AUTOFOCUS</Caption>
    <SelectField
      title="Select"
      value={value}
      items={items}
      equals={equals}
      autoFocus
      onChange={(value) => setValue(value)}
    />
  </Box>
  <Box>
    <Caption>ERROR</Caption>
    <SelectField
      title="Select"
      value={value}
      equals={equals}
      items={items}
      error="Error message"
      onChange={(value) => setValue(value)}
    />
  </Box>
  <Box>
    <Caption>DISABLED</Caption>
    <SelectField
      title="Select"
      value={value}
      equals={equals}
      items={items}
      disabled
      onChange={(value) => setValue(value)}
    />
  </Box>
  <Box>
    <Caption>STUB</Caption>
    <SelectField
      stub
      title="Select"
      items={[]}
      onChange={() => null}
    />
  </Box>
</Grid>
 ```
