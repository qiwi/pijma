## Размеры и отступы

Максимальная ширина поля ввода — 544px.

Ширину поля можно сократить:
- когда известно точное количество символов, которые нужно ввести;
- когда мы знаем ширину содержимого выпадающего списка.

Не рекомендуется располагать поля ввода в интерфейсных блоках, ширина которых превышает 680px.

## Состояния полей

#### Стандартное текстовое поле

```jsx
<Box width={100}>
  <TextField
    title="Текстовое поле"
    type="text"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле с подсказкой

```jsx
<Box width={100}>
  <TextField
    title="Текстовое поле"
    help="Подсказка"
    type="text"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле с кнопкой справа

```jsx
<Box width={100}>
  <TextField
    title="Поиск"
    type="text"
    action={<Link href="#/Fields/TextField">Нажать кнопку</Link>}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Текстовое поле с ошибкой

```jsx
<Box width={100}>
  <TextField
    title="Текстовое поле"
    error="Подсказка"
    type="text"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Неактивное поле

```jsx
<Box width={100}>
  <TextField
    title="Текстовое поле"
    type="text"
    disabled={true}
  />
</Box>
```

#### Поле с подсказкой

```jsx
<Box width={100}>
  <TextField
    title="Текстовое поле"
    type="text"
    hint={<QuestionIcon />}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Номер телефона

```jsx
<Box width={64}>
  <TextField
    title="Номер телефона"
    type="tel"
    mask={['(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Ввод суммы

```jsx
<Box width={64}>
  <TextField
    title="Сумма"
    type="tel"
    mask={createNumberMask({
      suffix: " ₽",
      decimalLimit: 2,
      requireDecimal: true,
      integerLimit: 20
    })}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Латинские буквы

```jsx
<Box width={100}>
  <TextField
    title="Имя на карте"
    type="tel"
    mask={createFilterMask(/[a-zA-Z\s-]/)}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Данные скрыты

```jsx
<Box width={16}>
  <TextField
    title="CVV"
    type="password"
    mask={[/\d/, /\d/, /\d/]}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Ограниченное количество символов

```jsx
<Box width={100}>
  <TextField
    title="Текстовое поле"
    type="text"
    maxLength={3}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

## Типы полей для мобильной клавиатуры

```jsx
<Box width={64}>
  <TextField
    placeholder="Цифровое поле"
    type="tel"
    value={state.text}
    onChange={text => setState({text})}
  />
  <TextField
    title="Поисковое поле"
    type="search"
    value={state.text}
    onChange={text => setState({text})}
  />
  <TextField
    title="Поле под email"
    type="email"
    value={state.text}
    onChange={text => setState({text})}
  />
    <TextField
    title="Поле url адреса "
    type="url"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```
## Поле ввода пароля

Для ввода пароля используется отдельный компонент [PasswordField](#/Компоненты/PasswordField)
