## Notice

Оповещают пользователей:
— о критических изменениях или ошибках в работе сервиса;
— об изменениях условий или лимитов;
— об успешных действиях в системе.

Не используйте заголовок с иконкой без основного текста.
Располагайте компонент в белом блоке со стандартными отступами.

Не рекомендуем добавлять в компонент кнопки. 

```jsx
<Card bg="#f5f5f5" p={7}>
  <Block>
    <BlockContent indent="l">
      <Notice 
        icon={<IconWrapper color="#D0021B"><Icon name="attention"/></IconWrapper>}
        title="Заголовок алерта с ошибкой"
        children={"Это текст алерта с сообщением об ошибке. \n Текст занимает две строки."}
      />
    </BlockContent>
  </Block>
</Card>
```

```jsx
<Card bg="#f5f5f5" p={7}>
  <Block>
    <BlockContent indent="l">
      <Notice 
        icon={<IconWrapper color="#4BBD5C"><Icon name="success"/></IconWrapper>}
        title="Заголовок алерта с успешным действием"
        children={"Это текст алерта с сообщением об успешном действии. \n Текст занимает две строки."}
      />
    </BlockContent>
  </Block>
</Card>
```

```jsx
<Card bg="#f5f5f5" p={7}>
  <Block>
    <Card p={7}>
      <Notice 
        icon={<IconWrapper color="#D0021B"><Icon name="attention"/></IconWrapper>}
        children={"Это алерт с сообщением об ошибке, \n у которого нет заголовка"}
      />
    </Card>
  </Block>
</Card>
```
