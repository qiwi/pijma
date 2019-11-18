### Стандартное поле ввода пароля

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        viewed={false}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

#### С кнопкой показать пароль

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        viewed
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода с кнопкой

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        viewed
        action={<a href="#/Fields/TextField">Сылка-кнопка</a>}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Ошибка

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        error="Подсказка"
        viewed
        value={state.text}
        onChange={text => setState({text})}
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
      <PasswordField
        name="password"
        title="Пароль"
        disabled={true}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле с хинтом

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        viewed={false}
        hint={<QuestionIcon />}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода с ограниченным количеством символов

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        name="password"
        title="Пароль"
        maxLength={3}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PasswordField
        stub
        title="if you need title stub put any corrent content here"
        error="if you need error stub put any corrent content here"
        hint="if you need hint stub put any corrent content here"
        viewed={false}
      />
    </Box>
  </BlockContent>
</Block>
```
