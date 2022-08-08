```jsx
<AlertBlock type="success">Операция прошла успешно</AlertBlock>
```

```jsx
<AlertBlock type="warning">Сообщение с предупреждением</AlertBlock>
```

```jsx
<AlertBlock type="waiting">Есть какая-то обработка операции</AlertBlock>
```

```jsx
<AlertBlock type="failure">
  {'Критическое сообщение. Иконка остается в левом верхнем углу\nВторая строка'}
</AlertBlock>
```

```jsx
<AlertBlock type="info">Просто информационное сообщение</AlertBlock>
```

```jsx
<AlertBlock type="info" onHide={() => {}}>
  Информационное сообщение с кнопкой "Закрыть"
</AlertBlock>
```

```jsx
<AlertBlock type="promo">Цвет темный</AlertBlock>
```

```jsx
<AlertBlock
  type="promo"
  icon={<Icon name="power" size={6} color="#D0021B" />}
  children="Можно менять иконку"
  onHide={() => {}}
/>
```
