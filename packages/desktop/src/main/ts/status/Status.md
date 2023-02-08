```jsx
<Block>
  <BlockContent indent="m">
    <Status
      data-testid="status"
      icon={<Icon name="attention" color="#ff0000" size={1} />}
      title="Не удалось найти информацию о никнейме"
      content="Наверное кто-то пролил кофе на сервер. \n  Попробуйте обновить страницу"
      actions={
        <Actions size="normal">
          <Button
            text="Обновить страницу"
            type="submit"
            kind="simple"
            size="normal"
          />
        </Actions>
      }
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent indent="m">
    <Status
      data-testid="status"
      icon={<Icon name="attention" color="#ff0000" size={1} />}
      title="Не удалось найти информацию о никнейме"
      content={
        <Spacer size="xxs">
          <Paragraph align="center" color="support">
            Наташа, проснись!
          </Paragraph>
          <Paragraph size="l" align="center" bold>
            Мы всё уронили!!!
          </Paragraph>
        </Spacer>
      }
      actions={
        <Actions size="normal">
          <Button
            text="Обновить страницу"
            type="submit"
            kind="simple"
            size="normal"
          />
        </Actions>
      }
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
          data-testid="status"
          icon={<Icon name="attention" color="#ff0000" size={1} />}
          title="Не удалось найти информацию о никнейме"
          content="Наверное кто-то пролил кофе на сервер. \n  Попробуйте обновить страницу"
          actions={
            <Actions size="normal">
              <Button
                text="Обновить страницу"
                type="submit"
                kind="simple"
                size="normal"
              />
            </Actions>
          }
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
      data-testid="status"
      title="Не удалось найти информацию о никнейме"
      content="Наверное кто-то пролил кофе на сервер. \n  Попробуйте обновить страницу"
      actions={
        <Actions size="normal">
          <Button
            text="Обновить страницу"
            type="submit"
            kind="simple"
            size="normal"
          />
        </Actions>
      }
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
          data-testid="status"
          icon={<Icon name="attention" color="#ff0000" size={1} />}
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
      data-testid="status"
      icon={<Icon name="success" color="#4bbd5c" size={1} />}
      title="Платеж проведен"
      content="Платеж №6384589229966 на 100 р"
      actions={
        <Actions size="normal">
          <Button
            icon={<Icon name="star" />}
            text="Сохранить в избранном"
            type="submit"
            kind="simple"
            size="normal"
          />
        </Actions>
      }
      children={
        <Spacer size="m">
          <Paragraph align="center">
            <Link size="l" href="#" children="Прислать квитанцию на почту" />
          </Paragraph>
          <Paragraph
            align="center"
            children="Чек о совершенном платеже и подробные реквизиты \n платежа вы найдете в истории платежей"
          />
        </Spacer>
      }
    />
  </BlockContent>
</Block>
```
