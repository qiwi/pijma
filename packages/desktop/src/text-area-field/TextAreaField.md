## Стандартное многострочное текстовое поле

```jsx
const [text, setText] = React.useState(undefined);
<Block>
  <BlockContent>
    <Box width={64}>
      <TextAreaField
        title="Поле ввода"
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```
## Поле с настраиваемым количеством строк

```jsx
const [text, setText] = React.useState('Многострочный текст превышающий начальное количество строк');

<Block>
  <BlockContent>
    <Box width={64}>
      <TextAreaField
        title="Поле ввода"
        minRows={2}
        maxRows={4}
        value={text}
        onChange={text => setText(text)}
      />
    </Box>
  </BlockContent>
</Block>
```

## Поле с плейсхолдером

```jsx
const [text, setText] = React.useState(undefined);
<Block>
  <BlockContent>
    <Box width={64}>
      <TextAreaField
        title="Поле ввода"
        placeholder="Только многострочный текст"
        minRows={2}
        maxRows={4}
        value={text}
        onChange={text => setText(text)}
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
      <TextAreaField
        title="Поле ввода"
        help="Подсказка"
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
      <TextAreaField
        title="Поле ввода"
        action={<a href="#/Fields/TextAreaField">Сылка-кнопка</a>}
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
      <TextAreaField
        title="Поле ввода"
        error="Подсказка"
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
      <TextAreaField
        title="Поле ввода"
        disabled={true}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Поле ввода с ограниченным количеством символов и количеством полей

```jsx
const [text, setText] = React.useState(undefined);
<Block>
  <BlockContent>
    <Box width={64}>
      <TextAreaField
        title="Поле ввода"
        maxLength={60}
        maxRows={3}
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
      <TextAreaField
        stub
        title="if you need title stub put any corrent content here"
        error="if you need error stub put any corrent content here"
      />
    </Box>
  </BlockContent>
</Block>
```
