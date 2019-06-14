```jsx
<Card bg="#f5f5f5" p={4}>
  <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)" p={11} pb={12}>
    <Box mb={2}>
      <Heading tag="h5" size="5">
        Нумерованный список
      </Heading>
    </Box>
    <List
      type="number"
      children={['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3', 'Элемент списка 4', 'Элемент списка 5', 'Элемент списка 6', 'Элемент списка 7', 'Элемент списка 8', 'Элемент списка 9', 'Элемент списка 10']}
    />
  </Card>
</Card>
```

```jsx
<Card bg="#f5f5f5" p={4}>
  <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)" p={11} pb={12}>
    <Box mb={2}>
      <Heading tag="h5" size="5">
        Маркированный список
      </Heading>
    </Box>
    <List
      type="bullet"
      children={['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3']}
    />
  </Card>
</Card>
```

```jsx
<Card bg="#f5f5f5" p={4}>
  <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)" p={11} pb={12}>
    <Box mb={2}>
      <Heading tag="h5" size="5">
        Степпер
      </Heading>
    </Box>
    <List
      type="step"
      children={['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3']}
    />
  </Card>
</Card>
```