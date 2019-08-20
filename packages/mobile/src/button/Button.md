## Brand Button

В размерах Normal и Minor используется для приоритетных или завершающих действий. В размере Accent — в качестве основной кнопки в промо-коммуникациях и на платежных формах.

```jsx
<Spacer size="xl">
  <Spacer>
    <Button
      kind="brand"
      size="accent"
      text="Нажать"
    />
    <Button
      kind="brand"
      size="normal"
      text="Нажать"
    />
    <Button
      kind="brand"
      size="minor"
      text="Нажать"
    />
  </Spacer>
  <Spacer>
    <Button
      disabled
      kind="brand"
      size="accent"
      text="Нажать"
    />
    <Button
      disabled
      kind="brand"
      size="normal"
      text="Нажать"
    />
    <Button
      disabled
      kind="brand"
      size="minor"
      text="Нажать"
    />
  </Spacer>
  <Spacer>
    <Button
      size="accent"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      stub
    />
    <Button
      size="normal"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      stub
    />
    <Button
      size="minor"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      stub
    />
  </Spacer>
</Spacer>
```

## Simple Button

Используется для второстепенных действий в сочетании с Brand Button или самостоятельно.

```jsx
<Spacer size="xl">
  <Spacer>
    <Button
      kind="simple"
      size="accent"
      text="Нажать"
    />
    <Button
      kind="simple"
      size="normal"
      text="Нажать"
    />
    <Button
      kind="simple"
      size="minor"
      text="Нажать"
    />
  </Spacer>
  <Spacer>
    <Button
      disabled
      kind="simple"
      size="accent"
      text="Нажать"
    />
    <Button
      disabled
      kind="simple"
      size="normal"
      text="Нажать"
    />
    <Button
      disabled
      kind="simple"
      size="minor"
      text="Нажать"
    />
  </Spacer>
  <Spacer>
    <Button
      size="accent"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      stub
    />
    <Button
      size="normal"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      stub
    />
    <Button
      size="minor"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      stub
    />
  </Spacer>
</Spacer>
```

## Loading Button

При загрузке в кнопке появляется лоадер.

```jsx
<Spacer size="xl">
  <Spacer>
    <Button
      loading
      kind="brand"
      size="accent"
      text="Нажать"
    />
    <Button
      loading
      kind="brand"
      size="normal"
      text="Нажать"
    />
    <Button
      loading
      kind="brand"
      size="minor"
      text="Нажать"
    />
  </Spacer>
  <Spacer>
    <Button
      loading
      kind="simple"
      size="accent"
      text="Нажать"
    />
    <Button
      loading
      kind="simple"
      size="normal"
      text="Нажать"
    />
    <Button
      loading
      kind="simple"
      size="minor"
      text="Нажать"
    />
  </Spacer>
</Spacer>
```

## Icon Button

Кнопки могут использоваться с иконками.

```jsx
<Spacer size="xl">
  <Spacer>
    <Button
      kind="brand"
      size="accent"
      icon={<Icon name="star"/>}
      text="Нажать"
    />
    <Button
      kind="brand"
      size="normal"
      icon={<Icon name="star"/>}
      text="Нажать"
    />
    <Button
      kind="brand"
      size="minor"
      icon={<Icon name="star"/>}
      text="Нажать"
    />
  </Spacer>
  <Spacer>
    <Button
      kind="simple"
      size="accent"
      icon={<Icon name="star"/>}
      text="Нажать"
    />
    <Button
      kind="simple"
      size="normal"
      icon={<Icon name="star"/>}
      text="Нажать"
    />
    <Button
      kind="simple"
      size="minor"
      icon={<Icon name="star"/>}
      text="Нажать"
    />
  </Spacer>
  <Spacer>
    <Button
      size="accent"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      icon
      stub
    />
    <Button
      size="normal"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      icon
      stub
    />
    <Button
      size="minor"
      kind="brand"
      type="button"
      text="if you need button stub put any corrent content here"
      icon
      stub
    />
  </Spacer>
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
        icon={<Icon name="star"/>}
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="brand"
        size="normal"
        icon={<Icon name="star"/>}
      />
    </FlexItem>
    <FlexItem>
      <Button
        kind="brand"
        size="minor"
        icon={<Icon name="star"/>}
      />
    </FlexItem>
  </Flex>
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="accent"
        icon={<Icon name="star"/>}
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="normal"
        icon={<Icon name="star"/>}
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        kind="simple"
        size="minor"
        icon={<Icon name="star"/>}
      />
    </FlexItem>
  </Flex>
  <Flex align="flex-start">
    <FlexItem pr={4}>
      <Button
        size="accent"
        kind="brand"
        type="button"
        icon
        stub
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="normal"
        kind="brand"
        type="button"
        icon
        stub
      />
    </FlexItem>
    <FlexItem pr={4}>
      <Button
        size="minor"
        kind="brand"
        type="button"
        icon
        stub
      />
    </FlexItem>
  </Flex>
</Spacer>
```
