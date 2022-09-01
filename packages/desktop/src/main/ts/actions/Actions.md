## Расположение

Кнопки могут располагаться вертикально или горизонтально.

#### Горизонтальное

```jsx
<Block>
  <BlockContent>
    <Actions size="accent">
      <Button kind="brand" size="accent" text="Кнопка" />
      <Button kind="simple" size="accent" text="Кнопка" />
    </Actions>
  </BlockContent>
</Block>
```

#### Вертикальное

При использовании такого расположения все кнопки становятся одной ширины и равны самой большой.

```jsx
<Block>
  <BlockContent>
    <Actions size="accent" vertical>
      <Button kind="brand" size="accent" text="Кнопка" />
      <Button kind="simple" size="accent" text="Кнопка" />
    </Actions>
  </BlockContent>
</Block>
```

## Размеры

В зависимости от размера кнопок прописывается размер разделителей

#### Accent

```jsx
<Block>
  <BlockContent>
    <Actions size="accent">
      <Button kind="brand" size="accent" text="Кнопка" />
      <Button kind="simple" size="accent" text="Кнопка" />
    </Actions>
  </BlockContent>
</Block>
```

#### Normal

```jsx
<Block>
  <BlockContent>
    <Actions size="normal">
      <Button kind="brand" size="normal" text="Кнопка" />
      <Button kind="simple" size="normal" text="Кнопка" />
    </Actions>
  </BlockContent>
</Block>
```

#### Minor

```jsx
<Block>
  <BlockContent>
    <Actions size="minor">
      <Button kind="brand" size="minor" text="Кнопка" />
      <Button kind="simple" size="minor" text="Кнопка" />
    </Actions>
  </BlockContent>
</Block>
```
