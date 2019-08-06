```jsx
<Card bg="#eee" p={7}>
  <Block>
    <Card width={200} p={7}>
      <Status
        textButton={'Отправить'}
        icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
        title="Заголовок статуса"
        children="Текст статуса \n Текст статуса"
      />
    </Card>
  </Block>
</Card>
```

Статус без кнопки

```jsx
<Card bg="#eee" p={7}>
  <Block>
    <Card p={7}>
      <Status
        icon={<IconWrapper color="#4bbd5c"><Icon name="success"/></IconWrapper>}
        title="Заголовок статуса"
        children="Текст статуса \n Текст статуса"
      />
    </Card>
  </Block>
</Card>
```

Статус без иконки

```jsx
<Card bg="#eee" p={7}>
  <Block>
    <Card p={7}>
      <Status
        textButton={'Отправить'}
        title="Заголовок статуса"
        children="Текст статуса \n Текст статуса"
      />
    </Card>
  </Block>
</Card>
```
