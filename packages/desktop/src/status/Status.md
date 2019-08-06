```jsx
<Card bg="#eee" p={7}>
  <Status
     textButton={'Отправить'}
     icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
     title="Заголовок"
     children="Текст Текст"
  />
</Card>
```

Статус без кнопки

```jsx
<Card bg="#ffffff" p={7}>
  <Status
     icon={<IconWrapper color="#4bbd5c"><Icon name="success"/></IconWrapper>}
     title="Заголовок"
     children="Text \n text"
     bg="#f5f5f5"
  />
</Card>
```

Статус без иконки

```jsx
<Card bg="#eee" p={7}>
  <Status
     textButton={'Отправить'}
     title="Заголовок"
     children="Без иконки длинный текст очент длинный текст текст текст еще слово"
  />
</Card>
```

Статус без заголовка

```jsx
<Card bg="#eee" p={7}>
  <Status
     textButton={'Отправить'}
     icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
     children="Без заголовка"
  />
</Card>
```
