Рекомендуемый размер заголовка [H2](#/Компоненты/Heading) с основным текстом [Body M]() (Normal).  
В окнах применяются [Brand Button](#/Компоненты/Button) и [Simple Button](#/Компоненты/Button) в размере Normal.

```jsx
<Box>
  <Actions size="normal">
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Показать окно"
      onClick={() => setState({ delete: true })}
    />
  </Actions>
  <SimpleModal
    show={state.delete}
    size={'m'}
    closable
    backdropClose
    onHide={() => setState({ delete: false })}
    children={
      <Spacer size="xl">
        <Heading size="2">Удалить из избранного?</Heading>
        <Actions size="normal">
          <Button
            kind="brand"
            size="normal"
            type="button"
            text="Удалить"
            onClick={() => setState({ delete: false })}
          />
          <Button
            kind="simple"
            size="normal"
            type="button"
            text="Отменить"
            onClick={() => setState({ delete: false })}
          />
        </Actions>
      </Spacer>
    }
  />
</Box>
```


#### Размеры окон

```jsx
<Box>
  <Actions size="normal">
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="S"
      onClick={() => setState({ s: true })}
    />
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="M"
      onClick={() => setState({ m: true })}
    />
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="L"
      onClick={() => setState({ l: true })}
    />
  </Actions>
  <SimpleModal
    show={state.s}
    size={'s'}
    closable
    onHide={() => setState({ s: false })}
    children={
      <Spacer size="m">
        <Heading size="2">Малое окно</Heading>
        <Paragraph size="m">Используется на форме авторизации</Paragraph>
      </Spacer>
    }
  />
  <SimpleModal
    show={state.m}
    size={'m'}
    closable
    onHide={() => setState({ m: false })}
    children={
      <Spacer size="m">
        <Heading size="2">Среднее окно</Heading>
        <Paragraph size="m">Используется на форме авторизации</Paragraph>
      </Spacer>
    }
  />
  <SimpleModal
    show={state.l}
    size={'l'}
    closable
    onHide={() => setState({ l: false })}
    children={
      <Spacer size="m">
        <Heading size="2">Большое окно</Heading>
        <Paragraph size="m">Используется на форме авторизации</Paragraph>
      </Spacer>
    }
  />
</Box>
```

## Примеры окон

#### Заголовок, описание и кнопки

```jsx
<Box>
  <Actions size="normal">
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Открыть"
      onClick={() => setState({ notification: true })}
    />
  </Actions>
  <SimpleModal
    show={state.notification}
    size={'m'}
    closable
    backdropClose
    onHide={() => setState({ notification: false })}
    children={
      <Spacer size="l">
        <Spacer size="m">
          <Heading size="2">Отключить уведомления?</Heading>
          <Paragraph size="m">Вам перестанут приходить сообщения о пополнении и списании</Paragraph>
        </Spacer>
        <Actions size="normal">
          <Button
            kind="brand"
            size="normal"
            type="button"
            text="Отключить уведомления"
            onClick={() => setState({ notification: false })}
          />
          <Button
            kind="simple"
            size="normal"
            type="button"
            text="Не отключать"
            onClick={() => setState({ notification: false })}
          />
        </Actions>
      </Spacer>
    }
  />
</Box>
```

#### Заголовок, инпут и кнопка

```jsx
<Box>
  <Actions size="normal">
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Открыть"
      onClick={() => setState({ email: true })}
    />
  </Actions>
  <SimpleModal
    show={state.email}
    size={'m'}
    closable
    backdropClose
    onHide={() => setState({ email: false })}
    children={
      <Spacer size="l">
        <Spacer size="l">
          <Heading size="2">Куда отправить квитанцию?</Heading>
            <TextField
              title="Адрес элктронной почты"
              type="text"
              value={state.text}
              onChange={text => setState({ text })}
            />
        </Spacer>
        <Actions size="normal">
          <Button
            kind="brand"
            size="normal"
            type="button"
            text="Отправить"
            onClick={() => setState({ email: false })}
          />
        </Actions>
      </Spacer>
    }
  />
</Box>
```

#### Заголовок, инпут, кнопка и чекбоксы.

```jsx
initialState = {values: ['selected']};
<Box>
  <Actions size="normal">
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Открыть"
      onClick={() => setState({ snapping: true })}
    />
  </Actions>
  <SimpleModal
    show={state.snapping}
    size={'m'}
    closable
    backdropClose
    onHide={() => setState({ snapping: false })}
    children={
      <Spacer size="l">
        <Spacer size="l">
          <Heading size="2">Привязка почты к QIWI Кошельку</Heading>
            <TextField
              title="Адрес элктронной почты"
              type="text"
              value={state.text}
              onChange={text => setState({ text })}
            />
        </Spacer>
        <Actions size="normal">
          <Button
            kind="brand"
            size="normal"
            type="button"
            text="Привязать почту"
            onClick={() => setState({ snapping: false })}
          />
        </Actions>
       <CheckboxField
          options={[{
            label: 'Использовать почту для изменения пароля',
            value: 'selected',
            disabled: false,
          }, {
            label: 'Получать письма о полезных функциях и акциях от QIWI',
            value: 'normal',
            disabled: false,
          }]}
          values={state.values}
          onChange={(values) => setState({values})}
        />
      </Spacer>
    }
  />
</Box>
```