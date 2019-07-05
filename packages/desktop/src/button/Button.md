## Brand Button

В размерах Normal и Minor используется для приоритетных или завершающих действий. В размере Accent — в качестве основной кнопки в промо-коммуникациях и на платежных формах.

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
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        size="accent"
        stub
        text
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="normal"
        stub
        text
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="minor"
        stub
        text
      />
    </FlexItem>
  </Flex>
</Spacer>
```

## Simple Button

Используется для второстепенных действий в сочетании с Brand Button или самостоятельно.

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
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        size="accent"
        stub
        text
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="normal"
        stub
        text
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="minor"
        stub
        text
      />
    </FlexItem>
  </Flex>
</Spacer>
```

## Loading Button

При загрузке в кнопке появляется лоадер.

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
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        size="accent"
        stub
        text
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="normal"
        stub
        text
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="minor"
        stub
        text
      />
    </FlexItem>
  </Flex>
</Spacer>
```

## Icon Button

Кнопки могут использоваться с иконками.

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
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        size="accent"
        stub
        icon
        text
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="normal"
        stub
        icon
        text
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="minor"
        stub
        icon
        text
      />
    </FlexItem>
  </Flex>
</Spacer>
```

## Round Button

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
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        size="accent"
        stub
        icon
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="normal"
        stub
        icon
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="minor"
        stub
        icon
      />
    </FlexItem>
  </Flex>
</Spacer>
```
