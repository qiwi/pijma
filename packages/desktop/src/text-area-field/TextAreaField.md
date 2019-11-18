## Стандартное многострочное текстовое поле

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <TextAreaField
        title="Поле ввода"
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```
## Поле с настраиваемым количеством строк

```jsx
initialState = {text: 'Многострочный текст превышающий начальное количество строк'};

<Block>
  <BlockContent>
    <Box width={64}>
      <TextAreaField
        title="Поле ввода"
        minRows={2}
        maxRows={4}
        value={state.text}
        onChange={text => setState({text})}
      />
    </Box>
  </BlockContent>
</Block>
```

## Поле с плейсхолдером

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <TextAreaField
        title="Поле ввода"
        placeholder="Только многострочный текст"
        minRows={2}
        maxRows={4}
        value={state.text}
        onChange={text => setState({text})}
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
      <TextAreaField
        title="Поле ввода"
        help="Подсказка"
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
      <TextAreaField
        title="Поле ввода"
        action={<a href="#/Fields/TextAreaField">Сылка-кнопка</a>}
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
      <TextAreaField
        title="Поле ввода"
        error="Подсказка"
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
<Block>
  <BlockContent>
    <Box width={64}>
      <TextAreaField
        title="Поле ввода"
        maxLength={60}
        maxRows={3}
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
      <TextAreaField
        stub
        title="if you need title stub put any corrent content here"
        error="if you need error stub put any corrent content here"
        maxLength={60}
        maxRows={3}
        value=""
      />
    </Box>
  </BlockContent>
</Block>
```
