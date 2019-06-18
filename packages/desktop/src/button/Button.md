## Brand Button

В размере Accent используется в качестве основной кнопки на лендингах и платежных формах.
В размерах Normal — для приоритетных или завершающих действий на остальных интерфейсных страницах. 
В размерах Minor — в небольших по высоте компонентах, например в верхнем меню. 

```jsx
<Spacer size="xl">
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        kind="brand"
        size="accent"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="brand"
        size="normal"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem>
      <Button
        kind="brand"
        size="minor"
        text="Нажать"
      />
    </FlexItem>
  </Flex>
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        disabled
        kind="brand"
        size="accent"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        disabled
        kind="brand"
        size="normal"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        disabled
        kind="brand"
        size="minor"
        text="Нажать"
      />
    </FlexItem>
  </Flex>
</Spacer>
```

## Simple Button

Используется для второстепенных действий, в сочетании с Brand Button или самостоятельно.

```jsx
<Spacer size="xl">
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="accent"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="normal"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem>
      <Button
        kind="simple"
        size="minor"
        text="Нажать"
      />
    </FlexItem>
  </Flex>
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        disabled
        kind="simple"
        size="accent"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        disabled
        kind="simple"
        size="normal"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        disabled
        kind="simple"
        size="minor"
        text="Нажать"
      />
    </FlexItem>
  </Flex>
</Spacer>
```

## Loading Button

При загрузке содержимого в кнопке появляется лоадер.

```jsx
<Spacer size="xl">
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        loading
        kind="brand"
        size="accent"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        loading
        kind="brand"
        size="normal"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem>
      <Button
        loading
        kind="brand"
        size="minor"
        text="Нажать"
      />
    </FlexItem>
  </Flex>
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        loading
        kind="simple"
        size="accent"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        loading
        kind="simple"
        size="normal"
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        loading
        kind="simple"
        size="minor"
        text="Нажать"
      />
    </FlexItem>
  </Flex>
</Spacer>
```

## Icon Button

Добавляйте иконку, чтобы проиллюстрировать название кнопки.

```jsx
<Spacer size="xl">
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        kind="brand"
        size="accent"
        icon={<StarIcon/>}
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="brand"
        size="normal"
        icon={<StarIcon/>}
        text="Нажать"
      />
    </FlexItem>
    <FlexItem>
      <Button
        kind="brand"
        size="minor"
        icon={<StarIcon/>}
        text="Нажать"
      />
    </FlexItem>
  </Flex>
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="accent"
        icon={<StarIcon/>}
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="normal"
        icon={<StarIcon/>}
        text="Нажать"
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="minor"
        icon={<StarIcon/>}
        text="Нажать"
      />
    </FlexItem>
  </Flex>
</Spacer>
```

## Round Button

Для экономии места кнопка может использоваться только с иконкой без текста. Следите за тем, чтобы смысл вызываемого действия был понятен пользователю.

```jsx
<Spacer size="xl">
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        kind="brand"
        size="accent"
        icon={<StarIcon/>}
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="brand"
        size="normal"
        icon={<StarIcon/>}
      />
    </FlexItem>
    <FlexItem>
      <Button
        kind="brand"
        size="minor"
        icon={<StarIcon/>}
      />
    </FlexItem>
  </Flex>
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="accent"
        icon={<StarIcon/>}
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="normal"
        icon={<StarIcon/>}
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="minor"
        icon={<StarIcon/>}
      />
    </FlexItem>
  </Flex>
</Spacer>
```
