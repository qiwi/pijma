## Расположение

Кнопки могут располагаться только друг под другом. В мобильной версии кнопки обычно занимают всю ширину контентного блока или экрана с учетом внутренних отступов.

```jsx
<Actions size="accent">
  <Button
    kind="brand"
    size="accent"
    text="Нажать красивую кнопку"
  />
  <Button
    kind="simple"
    size="accent"
    text="Нажать"
  />
</Actions>
```

## Размеры

Отступ между кнопками фиксированный — 16px.

#### Accent

```jsx
<Actions size="accent">
  <Button
    kind="brand"
    size="accent"
    text="Нажать"
  />
  <Button
    kind="simple"
    size="accent"
    text="Нажать"
  />
</Actions>
```

#### Normal

```jsx
<Actions size="normal">
  <Button
    kind="brand"
    size="normal"
    text="Нажать"
  />
  <Button
    kind="simple"
    size="normal"
    text="Нажать"
  />
</Actions>
```

#### Minor

```jsx
<Actions size="minor">
  <Button
    kind="brand"
    size="minor"
    text="Нажать"
  />
  <Button
    kind="simple"
    size="minor"
    text="Нажать"
  />
</Actions>
```
