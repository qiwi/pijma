Рекомендуемый размер заголовка [H2](#/Компоненты/Heading) с основным текстом [Body M]() (Normal).

В окнах применяются [Brand Button](#/Компоненты/Button) и [Simple Button](#/Компоненты/Button) в размере Normal.

```jsx
const [deleteModal, setDeleteModal] = React.useState(undefined);
<Block>
  <BlockContent>
    <Actions size="normal">
      <Button
        kind="simple"
        size="normal"
        type="button"
        text="Показать окно"
        onClick={() => setDeleteModal(true)}
      />
    </Actions>
    <SimpleModal
      show={deleteModal}
      size="m"
      closable
      backdropClose
      onHide={() => setDeleteModal(false)}
      children={
        <Spacer size="xl">
          <Heading size="2">Удалить из избранного?</Heading>
          <Actions size="normal">
            <Button
              kind="brand"
              size="normal"
              type="button"
              text="Удалить"
              onClick={() => setDeleteModal(false)}
            />
            <Button
              kind="simple"
              size="normal"
              type="button"
              text="Отменить"
              onClick={() => setDeleteModal(false)}
            />
          </Actions>
        </Spacer>
      }
    />
  </BlockContent>
</Block>
```

#### Размеры окон

```jsx
const [s, setS] = React.useState(undefined);
const [m, setM] = React.useState(undefined);
const [l, setL] = React.useState(undefined);
<Block>
  <BlockContent>
    <Actions size="normal">
      <Button
        kind="simple"
        size="normal"
        type="button"
        text="S"
        onClick={() => setS(true)}
      />
      <Button
        kind="simple"
        size="normal"
        type="button"
        text="M"
        onClick={() => setM(true)}
      />
      <Button
        kind="simple"
        size="normal"
        type="button"
        text="L"
        onClick={() => setL(true)}
      />
    </Actions>
    <SimpleModal
      show={s}
      size="s"
      closable
      onHide={() => setS(false)}
      children={
        <Spacer size="m">
          <Heading size="2">Малое окно</Heading>
          <Paragraph size="m">Используется на форме авторизации</Paragraph>
        </Spacer>
      }
    />
    <SimpleModal
      show={m}
      size="m"
      closable
      onHide={() => setM(false)}
      children={
        <Spacer size="m">
          <Heading size="2">Среднее окно</Heading>
          <Paragraph size="m">Используется на форме авторизации</Paragraph>
        </Spacer>
      }
    />
    <SimpleModal
      show={l}
      size="l"
      closable
      onHide={() => setL(false)}
      children={
        <Spacer size="m">
          <Heading size="2">Большое окно</Heading>
          <Paragraph size="m">Используется на форме авторизации</Paragraph>
        </Spacer>
      }
    />
  </BlockContent>
</Block>
```

## Примеры окон

#### Заголовок, описание и кнопки

```jsx
const [notification, setNotification] = React.useState(undefined);

<Block>
  <BlockContent>
    <Actions size="normal">
      <Button
        kind="simple"
        size="normal"
        type="button"
        text="Открыть"
        onClick={() => setNotification(true)}
      />
    </Actions>
    <SimpleModal
      show={notification}
      size="m"
      closable
      backdropClose
      onHide={() => setNotification(false)}
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
              onClick={() => setNotification(false)}
            />
            <Button
              kind="simple"
              size="normal"
              type="button"
              text="Не отключать"
              onClick={() => setNotification(false)}
            />
          </Actions>
        </Spacer>
      }
    />
  </BlockContent>
</Block>
```

#### Заголовок, инпут и кнопка

```jsx
const [email, setEmail] = React.useState(undefined);
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Actions size="normal">
      <Button
        kind="simple"
        size="normal"
        type="button"
        text="Открыть"
        onClick={() => setEmail(true)}
      />
    </Actions>
    <SimpleModal
      show={email}
      size="m"
      closable
      backdropClose
      onHide={() => setEmail(false)}
      children={
        <Spacer size="l">
          <Spacer size="l">
            <Heading size="2">Куда отправить квитанцию?</Heading>
              <TextField
                title="Адрес электронной почты"
                type="text"
                value={text}
                onChange={text => setText(text)}
              />
          </Spacer>
          <Actions size="normal">
            <Button
              kind="brand"
              size="normal"
              type="button"
              text="Отправить"
              onClick={() => setEmail(false)}
            />
          </Actions>
        </Spacer>
      }
    />
  </BlockContent>
</Block>
```

#### Заголовок, инпут, кнопка и чекбоксы.

```jsx
const [values, setValues] = React.useState(['selected']);
const [snapping, setSnapping] = React.useState(undefined);
const [text, setText] = React.useState(undefined);
<Block>
  <BlockContent>
    <Actions size="normal">
      <Button
        kind="simple"
        size="normal"
        type="button"
        text="Открыть"
        onClick={() => setSnapping(true)}
      />
    </Actions>
    <SimpleModal
      show={snapping}
      size="m"
      closable
      backdropClose
      onHide={() => setSnapping(false)}
      children={
        <Spacer size="l">
          <Spacer size="l">
            <Heading size="2">Привязка почты к QIWI Кошельку</Heading>
              <TextField
                title="Адрес электронной почты"
                type="text"
                value={text}
                onChange={text => setText(text)}
              />
          </Spacer>
          <Actions size="normal">
            <Button
              kind="brand"
              size="normal"
              type="button"
              text="Привязать почту"
              onClick={() => setSnapping(false)}
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
            values={values}
            onChange={(values) => setValues(values)}
          />
        </Spacer>
      }
    />
  </BlockContent>
</Block>
```
