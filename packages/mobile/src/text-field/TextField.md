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
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="Поле ввода"
      type="text"
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Плейсхолдер

```jsx
<Block>
  <BlockContent>
    <TextField
      stub
      title="if you need title stub put any corrent content here"
      help="if you need help stub put any corrent content here"
      hint="if you need hint stub put any corrent content here"
      value=""
    />
  </BlockContent>
</Block>
```

#### Поле с подсказкой

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="Поле ввода"
      help="Подсказка"
      type="text"
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Поле ввода с кнопкой

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="Поиск"
      type="text"
      action={<a href="#/Fields/TextField">Сылка-кнопка</a>}
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Ошибка

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="Поле ввода"
      error="Подсказка"
      type="text"
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Выключенное поле

```jsx
<Block>
  <BlockContent>
    <TextField title="Поле ввода" type="text" disabled={true} />
  </BlockContent>
</Block>
```

#### Поле с хинтом

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="Поле ввода"
      type="text"
      hint={<QuestionIcon />}
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Номер телефона

```jsx
const [text, setText] = React.useState('+7')
;<Block>
  <BlockContent>
    <TextField
      title="Номер телефона"
      type="tel"
      mask={[
        '+',
        /7/,
        '(',
        /\d/,
        /\d/,
        /\d/,
        ')',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Поле ввода ссумы

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="Сумма"
      type="tel"
      mask={createNumberMask({
        suffix: ' ₽',
        decimalLimit: 2,
        requireDecimal: true,
        integerLimit: 20,
      })}
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Поле ввода латинских символов

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="Имя на карте"
      type="tel"
      mask={createFilterMask(/[a-zA-Z\s-]/)}
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Скрыть вводимые символы

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="CVV"
      type="password"
      mask={[/\d/, /\d/, /\d/]}
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

#### Поле ввода с ограниченным количеством символов

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      title="Поле ввода"
      type="text"
      maxLength={3}
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

## Типы полей для мобильной клавиатуры

```jsx
const [text, setText] = React.useState(undefined)

;<Block>
  <BlockContent>
    <TextField
      placeholder="Цифровое поле"
      type="tel"
      value={text}
      onChange={(text) => setText(text)}
    />
    <TextField
      title="Поисковое поле"
      type="search"
      value={text}
      onChange={(text) => setText(text)}
    />
    <TextField
      title="Поле под email"
      type="email"
      value={text}
      onChange={(text) => setText(text)}
    />
    <TextField
      title="Поле url адреса "
      type="url"
      value={text}
      onChange={(text) => setText(text)}
    />
  </BlockContent>
</Block>
```

## Поле ввода пароля

Для ввода пароля используется отдельный компонент [PasswordField](#/Компоненты/PasswordField)
