## Расположение

Кнопки могут располагаться вертикально или горизонтально.

#### Горизонтальное

```jsx
<Actions size="accent">
  <Button
    kind="brand"
    size="accent"
    text="Кнопка"
  />
  <Button
    kind="simple"
    size="accent"
    text="Кнопка"
  />
</Actions>
```

#### Вертикальное

При использовании такого расположения все кнопки становятся одной ширины и равны самой большой.

```jsx
<Actions
  size="accent" vertical>
  <Button
    kind="brand"
    size="accent"
    text="Кнопка"
  />
  <Button
    kind="simple"
    size="accent"
    text="Кнопка"
  />
</Actions>
```

## Размеры

В зависимости от размера кнопок прописывается размер разделителей

#### Accent

```jsx
<Actions size="accent">
  <Button
    kind="brand"
    size="accent"
    text="Кнопка"
  />
  <Button
    kind="simple"
    size="accent"
    text="Кнопка"
  />
</Actions>
```

#### Normal

```jsx
<Actions size="normal">
  <Button
    kind="brand"
    size="normal"
    text="Кнопка"
  />
  <Button
    kind="simple"
    size="normal"
    text="Кнопка"
  />
</Actions>
```

#### Minor

```jsx
<Actions size="minor">
  <Button
    kind="brand"
    size="minor"
    text="Кнопка"
  />
  <Button
    kind="simple"
    size="minor"
    text="Кнопка"
  />
</Actions>
```
