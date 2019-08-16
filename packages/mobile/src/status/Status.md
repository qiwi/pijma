```jsx
<Block>
  <BlockContent indent="m">
    <Status
      icon={(
        <IconWrapper color="#ff0000">
          <Icon name="attention"/>
        </IconWrapper>
      )}
      title="Не удалось найти информацию о никнейме"
      content="Наверное кто-то пролил кофе на сервер. \n  Попробуйте обновить страницу"
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
```
  
```jsx
<Block>
  <BlockContent>
    <Section>
      <Box p={11}>
        <Status
          icon={(
            <IconWrapper color="#666">
              <Icon name="attention"/>
            </IconWrapper>
          )}
          title="Не удалось найти информацию о никнейме"
          content="Наверное кто-то пролил кофе на сервер. \n  Попробуйте обновить страницу"
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
  </BlockContent>
</Block>
```

## Статус без иконки

```jsx
<Block>
  <BlockContent>
    <Status
      title="Не удалось найти информацию о никнейме"
      content="Наверное кто-то пролил кофе на сервер. \n  Попробуйте обновить страницу"
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
```

## Статус без кнопки

```jsx
<Block>
  <BlockContent>
    <Section>
      <Box p={12}>
        <Status
          icon={(
            <IconWrapper color="#ff0000">
              <Icon name="attention"/>
            </IconWrapper>
          )}
          title="Не удалось найти информацию о никнейме"
          content="Наверное кто-то пролил кофе на сервер. \n  Попробуйте обновить страницу"
        />
      </Box> 
    </Section>
  </BlockContent>
</Block>
```

## Дополнительное произвольное содержимое

```jsx
<Block>
  <BlockContent>
    <Status
      icon={(
        <IconWrapper color="#4bbd5c">
          <Icon name="success"/>
        </IconWrapper>
      )}
      title="Платеж проведен"
      content="Платеж №6384589229966 на 100 р"
      actions={(
        <Actions size="normal">
          <Button
            icon={<StarIcon/>} 
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
              size="l" 
              href="#"
              children="Прислать квитанцию на почту"
            />
          </Paragraph>
          <Paragraph 
            align="center"
            children="Чек о совершенном платеже и подробные реквизиты \n платежа вы найдете в истории платежей"
          />
        </Spacer>
      )}
    />
  </BlockContent>
</Block>
```
