## Расположение

Кнопки могут располагаться как вертикально, так и горизонтально относительно друг друга.

#### Горизонтальная группа

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

#### Вертикальная группа

При вертикальном расположении ширина всех кнопок одинакова. За основу берется ширина кнопки с самым большим содержимым.

```jsx
<Actions
  size="accent" vertical>
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

Отступ между кнопками зависит от их размера.
Accent — 24px;
Normal — 20px;
Minor — 16px.

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
