## Стандартное многострочное текстовое поле

```jsx
<Box width={64}>
  <TextAreaField
    title="Поле ввода"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```
## Стандартное многострочное текстовое поле с настраиваемым количеством полей

```jsx
initialState = {text: 'Текст в многострочном текстовом поле'};

<Box width={64}>
  <TextAreaField
    title="Поле ввода"
    minRows={2}
    maxRows={4}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле с подсказкой

```jsx
<Box width={64}>
  <TextAreaField
    title="Поле ввода"
    help="Подсказка"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле ввода с кнопкой

```jsx
<Box width={64}>
  <TextAreaField
    title="Поле ввода"
    action={<a href="#/Fields/TextAreaField">Сылка-кнопка</a>}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Ошибка

```jsx
<Box width={64}>
  <TextAreaField
    title="Поле ввода"
    error="Подсказка"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Выключенное поле

```jsx
<Box width={64}>
  <TextAreaField
    title="Поле ввода"
    disabled={true}
  />
</Box>
```

#### Поле с хинтом

```jsx
<Box width={64}>
  <TextAreaField
    title="Поле ввода"
    hint={<QuestionIcon />}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле ввода с ограниченным количеством символов и количеством полей

```jsx
<Box width={64}>
  <TextAreaField
    title="Поле ввода"
    maxLength={60}
    maxRows={1}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```
