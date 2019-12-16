```jsx
initialState = {value: {id: undefined}};

items = [
  {
    text: 'Option 1',
    value: {
      id: 1,
    },
  },
  {
    text: 'Option 2',
    value: {
      id: 2,
    },
  },
  {
    text: 'Option 3',
    value: {
      id: 3,
    },
  },
  {
    text: 'Option 4',
    value: {
      id: 4,
    },
  },
  {
    text: 'Option 5',
    value: {
      id: 5,
    },
  },
  {
    text: 'Option 6',
    value: {
      id: 6,
    },
  },
  {
    text: 'Option 7',
    value: {
      id: 7,
    },
  },
  {
    text: 'Option 8',
    value: {
      id: 8,
    },
  },
  {
    text: 'Option 9',
    value: {
      id: 9,
    },
  },
  {
    text: 'Option 10',
    value: {
      id: 10,
    },
  },
  {
    text: 'Option 11',
    value: {
      id: 11,
    },
  },
  {
    text: 'Option 12',
    value: {
      id: 12,
    },
  },
  {
    text: 'Option 13',
    value: {
      id: 13,
    },
  },
  {
    text: 'Option 14',
    value: {
      id: 14,
    },
  },
  {
    text: 'Option 15',
    value: {
      id: 15,
    },
  },
  {
    text: 'Option 16',
    value: {
      id: 16,
    },
  },
  {
    text: 'Option 17',
    value: {
      id: 17,
    },
  },
  {
    text: 'Option 18',
    value: {
      id: 18,
    },
  },
  {
    text: 'Option 19',
    value: {
      id: 19,
    },
  },
  {
    text: 'Option 20',
    value: {
      id: 20,
    },
  },
];

const equals = (a, b) => a.id === b.id;

const onChange = (value) => {
  setState({
  value: value,
  });
};

<Grid columns={2} layout={[1]}>
  <Box>
    <Caption>AUTOFOCUS</Caption>
    <Select
      title="Select"
      value={state.value}
      onChange={onChange}
      items={items}
      equals={equals}
      autoFocus
    />
  </Box>
  <Box>
    <Caption>ERROR</Caption>
    <Select
      title="Select"
      value={state.value}
      onChange={onChange}
      equals={equals}
      items={items}
      error="Error Message"
    />
  </Box>
  <Box>
    <Caption>DISABLED</Caption>
    <Select
      title="Select"
      value={state.value}
      onChange={onChange}
      equals={equals}
      items={items}
      disabled
    />
  </Box>
</Grid>
```
