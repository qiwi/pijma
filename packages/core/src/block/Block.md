## Состояния блоков

#### Default
```jsx
  <Card bg="#eee" p={7}>
    <Spacer size="l">
      <Block>
        <Card p={7}>
          <Paragraph size="m">Normal</Paragraph>
        </Card>
      </Block>
    </Spacer>
  </Card>
```

#### Hover
```jsx
  <Card bg="#eee" p={7}>
    <Spacer size="l">
      <Block hover>
        <Card p={7}>
          <Paragraph size="m">Hover</Paragraph>
        </Card>
      </Block>
    </Spacer>
  </Card>
```

#### Hover accent
Карточка смещается вверх на 4px
```jsx
  <Card bg="#eee" p={7}>
    <Spacer size="l">
      <Block hover accent>
        <Card p={7}>
          <Paragraph size="m">Hover accent</Paragraph>
        </Card>
      </Block>
    </Spacer>
  </Card>
```