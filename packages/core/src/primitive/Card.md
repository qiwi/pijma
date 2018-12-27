### Shadows

```jsx
<Card bg="#f5f5f5">
  <Flex direction="row" wrap="wrap">
    <FlexItem p={10}>
      <Spacer size="xxl">
        <Card r={10} bg="#fff" width={40} height={40} s="0 1px 2px 0 rgba(0, 0, 0, 0.12)"/>
        <Card r={10} bg="#fff" width={40} height={40} s="0 8px 16px 0 rgba(0, 0, 0, 0.12)"/>
        <Card r={10} bg="#fff" width={40} height={40} s="0 16px 32px 4px rgba(0, 0, 0, 0.16)"/>
        <Card r={10} bg="#fff" width={40} height={40} s="0 20px 64px 8px rgba(0, 0, 0, 0.16)"/>
      </Spacer>
    </FlexItem>
    <FlexItem p={10}>
      <Spacer size="xxl">
        <Card bg="#fff" width={40} height={40} s="0 1px 2px 0 rgba(0, 0, 0, 0.12)"/>
        <Card bg="#fff" width={40} height={40} s="0 0 16px 0 rgba(0, 0, 0, 0.12)"/>
        <Card bg="#fff" width={40} height={40} s="0 0 32px 0 rgba(0, 0, 0, 0.16)"/>
        <Card bg="#fff" width={40} height={40} s="0 0 64px 0 rgba(0, 0, 0, 0.16)"/>
      </Spacer>
    </FlexItem>
  </Flex>
</Card>
```

### Separators

```jsx
<Card bg="#f5f5f5" p={10}>
  <Card r={10} bg="#fff" s="0 1px 2px 0 rgba(0, 0, 0, 0.12)">
    <Card height={20} bb="1px solid #e6e6e6"/>
    <Card height={20} bb="1px solid #e6e6e6"/>
    <Card height={20}/>
  </Card>
</Card>
```

### Hints

```jsx
<Card bg="#f5f5f5" p={10}>
  <Card display="inline-block" r={10} py={4} px={6} bg="#fff" s="0 8px 16px 0 rgba(0, 0, 0, 0.12)">
    <Paragraph>Малые подсказки могут вмещать в себя минимум пару слов,<br/>максимум — одно предложение.</Paragraph>
  </Card>
</Card>
```
