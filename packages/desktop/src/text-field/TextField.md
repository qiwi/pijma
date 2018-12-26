## Размеры и отступы

Максимальная ширина поля ввода — 528px.

Ширину поля можно сократить:
- Когда известно точное количество символов, которые нужно ввести.
- Когда мы знаем ширину содержимого выпадающего списка.

Не рекомендуется располагать поля ввода в интерфейсных блоках, ширина которых превышает 680px.

## Типографика

Для плейсхолдера — [Body L 300 Compact](#/Компоненты/Heading) (серый), для введенных данных — [Body L 300 Compact]() (черный).

Для заголовка и для подсказок — [Body S 300]() Compact, серый или черный, для заголовка в фокусе — оранжевый, для кликабельных элементов — синий, для ошибок — красный.

## Состояния полей

#### Обычное поле

```jsx
<Box width={64}>
  <TextField
    title="Поле ввода"
    type="text"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле с подсказкой

```jsx
<Box width={64}>
  <TextField
    title="Поле ввода"
    help="Подсказка"
    type="text"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле ввода с кнопкой

```jsx
<Box width={64}>
  <TextField
    title="Поиск"
    type="text"
    action={<a href="#/Fields/TextField">Сылка-кнопка</a>}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Ошибка

```jsx
<Box width={64}>
  <TextField
    title="Поле ввода"
    error="Подсказка"
    type="text"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Выключенное поле

```jsx
<Box width={64}>
  <TextField
    title="Поле ввода"
    type="text"
    disabled={true}
  />
</Box>
```

#### Поле с хинтом

```jsx
<Box width={64}>
  <TextField
    title="Поле ввода"
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

#### Поле ввода ссумы

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

#### Поле ввода латинских символов

```jsx
<Box width={64}>
  <TextField
    title="Имя на карте"
    type="tel"
    mask={createFilterMask(/[a-zA-Z\s-]/)}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Скрыть вводимые символов

```jsx
<Box width={64}>
  <TextField
    title="CVV"
    type="password"
    mask={[/\d/, /\d/, /\d/]}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле ввода с ограниченным количеством символов

```jsx
<Box width={64}>
  <TextField
    title="Поле ввода"
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
