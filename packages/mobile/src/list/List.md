```jsx
<Card bg="#f5f5f5" p={4}>
  <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)" p={4}>
    <Box mb={2}>
      <Heading tag="h5" size="5">
        Нумерованный список
      </Heading>
    </Box>
    <List
      type="number"
      children={['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3']}
    />
  </Card>
</Card>
```

```jsx
<Card bg="#f5f5f5" p={4}>
  <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)" p={4}>
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
  <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)" p={4}>
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