### Shadows

```jsx
<Card bg="layout">
  <Flex direction="column">
    <FlexItem p={10}>
      <Spacer size="xxl">
        <Card r={10} bg="content" width={40} height={40} shadow="z1"/>
        <Card r={10} bg="content" width={40} height={40} shadow="z2"/>
        <Card r={10} bg="content" width={40} height={40} shadow="z3"/>
        <Card r={10} bg="content" width={40} height={40} shadow="z4"/>
      </Spacer>
    </FlexItem>
    <FlexItem p={10}>
      <Spacer size="xxl">
        <Card bg="content" width={40} height={40} shadow="f1"/>
        <Card bg="content" width={40} height={40} shadow="f2"/>
        <Card bg="content" width={40} height={40} shadow="f3"/>
        <Card bg="content" width={40} height={40} shadow="f4"/>
      </Spacer>
    </FlexItem>
  </Flex>
</Card>
```

### Separators

```jsx
<Card bg="layout" p={10}>
  <Card r={10} bg="content" shadow="z1">
    <Card height={20} bb="content"/>
    <Card height={20} bb="content"/>
    <Card height={20}/>
  </Card>
</Card>
```

### Hints

```jsx
<Card bg="layout" p={10}>
  <Card display="inline-block" r={10} py={4} px={6} bg="content" shadow="z2">
    <Paragraph>Малые подсказки могут вмещать в себя минимум пару слов,<br/>максимум — одно предложение.</Paragraph>
  </Card>
</Card>
```
