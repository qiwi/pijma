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
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Поле ввода"
        type="text"
        value={text}
        onChange={text => setText(text)}
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
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Поле ввода"
        help="Подсказка"
        type="text"
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода с кнопкой

```jsx
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Поиск"
        type="text"
        action={<a href="#/Fields/TextField">Сылка-кнопка</a>}
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Ошибка

```jsx
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Поле ввода"
        error="Подсказка"
        type="text"
        value={text}
        onChange={text => setText(text)}
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
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Поле ввода"
        type="text"
        hint={<QuestionIcon />}
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Номер телефона

```jsx
const [text, setText] = React.useState('+7');

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Номер телефона"
        type="tel"
        mask={['+', /7/, '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода ссумы

```jsx
const [text, setText] = React.useState(undefined);

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
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода латинских символов

```jsx
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Имя на карте"
        type="tel"
        mask={createFilterMask(/[a-zA-Z\s-]/)}
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Скрыть вводимые символы

```jsx
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="CVV"
        type="password"
        mask={[/\d/, /\d/, /\d/]}
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода с ограниченным количеством символов

```jsx
const [text, setText] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        title="Поле ввода"
        type="text"
        maxLength={3}
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

## Типы полей для мобильной клавиатуры

```jsx
const [text1, setText1] = React.useState(undefined);
const [text2, setText2] = React.useState(undefined);
const [text3, setText3] = React.useState(undefined);
const [text4, setText4] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <TextField
        placeholder="Цифровое поле"
        type="tel"
        value={text1}
        onChange={text => setText1(text)}
      />
      <TextField
        title="Поисковое поле"
        type="search"
        value={text2}
        onChange={text => setText2(text)}
      />
      <TextField
        title="Поле под email"
        type="email"
        value={text3}
        onChange={text => setText3(text)}
      />
      <TextField
        title="Поле url адреса "
        type="url"
        value={text4}
        onChange={text => setText4(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

## Поле ввода пароля

Для ввода пароля используется отдельный компонент [PasswordField](#/Компоненты/PasswordField)

## Многострочное текстовое поле

Для ввода нескольких строк текста используется отдельный компонент [TextAreaField](#/Компоненты/TextAreaField)
