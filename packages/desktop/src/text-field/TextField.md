## Размеры и отступы

Максимальная ширина поля ввода — 528px.

Ширину поля можно сократить:
- Когда известно точное количество символов, которые нужно ввести.
- Когда мы знаем ширину содержимого выпадающего списка.

Не рекомендуется располагать поля ввода в интерфейсных блоках, ширина которых превышает 680px.

## Типографика

Для плейсхолдера — [Body L 300 Compact]() (серый), для введенных данных — [Body L 300 Compact]() (черный).

Для заголовка и для подсказок — [Body S 300]() Compact, серый или черный, для заголовка в фокусе — оранжевый, для кликабельных элементов — синий, для ошибок — красный.

## Состояния полей

#### Обычное поле

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Поле ввода"
        type="text"
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Плейсхолдер

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        stub
        title="if you need title stub put any corrent content here"
        help="if you need help stub put any corrent content here"
        hint="if you need hint stub put any corrent content here"
        value=""
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле с подсказкой

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Поле ввода"
        help="Подсказка"
        type="text"
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
      <TextField
        title="Поиск"
        type="text"
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
      <TextField
        title="Поле ввода"
        error="Подсказка"
        type="text"
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
      <TextField
        title="Поле ввода"
        type="text"
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
      <TextField
        title="Поле ввода"
        type="text"
        hint={<QuestionIcon />}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Номер телефона

```jsx
initialState = {text: '+7'};
<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Номер телефона"
        type="tel"
        mask={['+', /7/, '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода ссумы

```jsx
<Block>
  <BlockContent>
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
  </BlockContent>
</Block>
```

#### Поле ввода латинских символов

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Имя на карте"
        type="tel"
        mask={createFilterMask(/[a-zA-Z\s-]/)}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Скрыть вводимые символов

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="CVV"
        type="password"
        mask={[/\d/, /\d/, /\d/]}
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
      <TextField
        title="Поле ввода"
        type="text"
        maxLength={3}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

## Типы полей для мобильной клавиатуры

```jsx
<Block>
  <BlockContent>
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
  </BlockContent>
</Block>
```

## Поле ввода пароля

Для ввода пароля используется отдельный компонент [PasswordField](#/Компоненты/PasswordField)
