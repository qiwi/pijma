### Стандартное поле ввода пароля

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        viewed={false}
        value={text}
        onChange={(text) => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### С кнопкой показать пароль

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        viewed
        value={text}
        onChange={(text) => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода с кнопкой

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        viewed
        action={<a href="#/Fields/TextField">Сылка-кнопка</a>}
        value={text}
        onChange={(text) => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Ошибка

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        error="Подсказка"
        viewed
        value={text}
        onChange={(text) => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Выключенное поле

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField name="password" title="Пароль" disabled={true} />
    </Box>
  </BlockContent>
</Block>
```

#### Поле с хинтом

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        viewed={false}
        hint={<QuestionIcon />}
        value={text}
        onChange={(text) => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода с ограниченным количеством символов

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        maxLength={3}
        value={text}
        onChange={(text) => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```
