```jsx
<Card bg="#eee" p={7}>
  <Block>
    <Card p={7}>
      <Notice 
        icon={<IconWrapper color="#ff0000"><Icon name="attention"/></IconWrapper>}
        title="Заголовок какого-нибудь алерта"
        children={"Заголовок какого-нибудь алерта \n Заголовок какого-нибудь алерта"}
      />
    </Card>
  </Block>
</Card>
```
```jsx
<Card bg="#eee" p={7}>
  <Block>
    <Card p={7}>
      <Notice 
        icon={<Icon name="attention"/>}
        children={"Заголовок какого-нибудь алерта \n Заголовок какого-нибудь алерта"}
      />
    </Card>
  </Block>
</Card>
```
