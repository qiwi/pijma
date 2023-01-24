```jsx
<AlertBlock data-testid="alert-block" type="success">
  Операция прошла успешно
</AlertBlock>
```

```jsx
<AlertBlock data-testid="alert-block" type="warning">
  Сообщение с предупреждением
</AlertBlock>
```

```jsx
<AlertBlock data-testid="alert-block" type="waiting">
  Есть какая-то обработка операции
</AlertBlock>
```

```jsx
<AlertBlock data-testid="alert-block" type="failure">
  {'Критическое сообщение. Иконка остается в левом верхнем углу\nВторая строка'}
</AlertBlock>
```

```jsx
<AlertBlock data-testid="alert-block" type="info">
  Просто информационное сообщение
</AlertBlock>
```

```jsx
<AlertBlock data-testid="alert-block" type="info" onHide={() => {}}>
  Информационное сообщение с кнопкой "Закрыть"
</AlertBlock>
```

```jsx
<AlertBlock data-testid="alert-block" type="promo">
  Цвет темный
</AlertBlock>
```

```jsx
<AlertBlock
  type="promo"
  icon={<Icon name="power" size={6} color="#D0021B" />}
  children="Можно менять иконку"
  onHide={() => {}}
/>
```
