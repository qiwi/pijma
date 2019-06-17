### Стандартное поле ввода пароля

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Введите пароль"
    viewed={false}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### С возможностью показать пароль

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Введите пароль"
    viewed
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### С текстовой кнопкой справа

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Введите пароль"
    viewed
    action={<Link size="s" href="https://qiwi.com">Нажать кнопку</Link>}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### С ошибкой

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Введите пароль"
    error="Подсказка"
    viewed
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Неактивное поле

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Введите пароль"
    disabled={true}
  />
</Box>
```

#### С подсказкой

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Введите пароль"
    viewed={false}
    hint={<QuestionIcon />}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### С ограничением количества символов

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Введите пароль"
    maxLength={3}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```
