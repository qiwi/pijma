### Стандартное поле ввода пароля

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Пароль"
    viewed={false}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### С кнопкой показать пароль

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Пароль"
    viewed
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле ввода с кнопкой

```jsx
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
```

#### Ошибка

```jsx
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
```

#### Выключенное поле

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Пароль"
    disabled={true}
  />
</Box>
```

#### Поле с хинтом

```jsx
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
```

#### Поле ввода с ограниченным количеством символов

```jsx
<Box width={64}>
  <PasswordField
    name="password"
    title="Пароль"
    maxLength={3}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```
