## Стандартное многострочное текстовое поле

```jsx
<Box width={64}>
  <TextArea
    title="Поле ввода"
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле с подсказкой

```jsx
<Box width={64}>
  <TextArea
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
  <TextArea
    title="Поле ввода"
    action={<a href="#/Fields/TextArea">Сылка-кнопка</a>}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Ошибка

```jsx
<Box width={64}>
  <TextArea
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
  <TextArea
    title="Поле ввода"
    disabled={true}
  />
</Box>
```

#### Поле с хинтом

```jsx
<Box width={64}>
  <TextArea
    title="Поле ввода"
    hint={<QuestionIcon />}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```

#### Поле ввода с ограниченным количеством символов

```jsx
<Box width={64}>
  <TextArea
    title="Поле ввода"
    maxLength={60}
    value={state.text}
    onChange={text => setState({text})}
  />
</Box>
```
