```jsx
<Card bg="#e6e6e6" p={2}>
  <Grid>
    <Block>
      <BlockContent indent="l">
        <Status
          icon={(
            <Icon
              name="attention"
              color="#ff0000"
              size={1}
            />
          )}
          title="Не удалось найти информацию о никнейме"
          content="Наверное кто-то пролил кофе на сервер. Попробуйте обновить страницу"
          actions={(
            <Actions size="normal">
              <Button 
                text="Обновить страницу" 
                type="submit" 
                kind="simple" 
                size="normal"
              />
            </Actions>
          )}
        />
      </BlockContent>
    </Block>
    <Section>
      <Box p={6}>
        <Status
          icon={(
            <Icon
              name="attention"
              color="#ff0000"
              size={1}
            />
          )}
          title="Не удалось найти информацию о никнейме"
          content="Наверное кто-то пролил кофе на сервер. Попробуйте обновить страницу"
          actions={(
            <Actions size="normal">
              <Button 
                text="Обновить страницу" 
                type="submit" 
                kind="simple" 
                size="normal"
              />
            </Actions>
          )}
        />
      </Box>
    </Section>
  </Grid>
</Card>
```

Статус без иконки

```jsx
<Card bg="#eee" p={2}>
  <Block>
    <BlockContent indent="l">
      <Status
        title="Не удалось найти информацию о никнейме"
        content="Наверное кто-то пролил кофе на сервер. Попробуйте обновить страницу"
        actions={(
          <Actions size="normal">
            <Button 
              text="Обновить страницу" 
              type="submit" 
              kind="simple" 
              size="normal"
            />
          </Actions>
        )}
      />
    </BlockContent>
  </Block>
</Card>
```

Статус без кнопки

```jsx
<Card p={2}>
  <Section>
    <Box p={6}>
        <Status
          icon={(
            <Icon
              name="attention"
              color="#ff0000"
              size={1}
            />
          )}
          title="Не удалось найти информацию о никнейме"
          content="Наверное кто-то пролил кофе на сервер. Попробуйте обновить страницу"
        />
    </Box> 
  </Section>
</Card>
```

Дополнительное произвольное содержимое

```jsx
<Card bg="#eee" p={2}>
  <Block>
    <BlockContent indent="l">
      <Status
        icon={(
          <Icon
            name="success"
            color="#4bbd5c"
            size={1}
          />
        )}
        title="Платеж проведен"
        content="Платеж №6384589229966 на 100 р"
        actions={(
          <Actions size="normal">
            <Button
              icon={<Icon name="star"/>} 
              text="Сохранить в избранном" 
              type="submit" 
              kind="simple" 
              size="normal"
            />
          </Actions>
        )}
        children={(
          <Spacer size="m">
            <Paragraph align="center">
              <Link 
                size="m" 
                href="#"
                children="Прислать квитанцию на почту"
              />
            </Paragraph>
            <Paragraph align="center">
              Чек о совершенном платеже и подробные реквизиты платежа вы найдете в истории платежей
            </Paragraph>
          </Spacer>
        )}
      />
    </BlockContent>
  </Block>
</Card>
```
