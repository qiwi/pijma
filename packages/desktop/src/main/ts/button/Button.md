## Brand Button

В размерах Normal и Minor используется для приоритетных или завершающих действий. В размере Accent — в качестве основной кнопки в промо-коммуникациях и на платежных формах.

```jsx
<Block>
  <BlockContent>
    <Spacer size="xl">
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="brand"
            size="accent"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="brand"
            size="normal"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem>
          <Button
            data-testid="button"
            kind="brand"
            size="minor"
            text="Нажать"
          />
        </FlexItem>
      </Flex>
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            disabled
            kind="brand"
            size="accent"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            disabled
            kind="brand"
            size="normal"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
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
            data-testid="no"
            size="accent"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="normal"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="minor"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```

## Simple Button

Используется для второстепенных действий в сочетании с Brand Button или самостоятельно.

```jsx
<Block>
  <BlockContent>
    <Spacer size="xl">
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="simple"
            size="accent"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="simple"
            size="normal"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem>
          <Button
            data-testid="button"
            kind="simple"
            size="minor"
            text="Нажать"
          />
        </FlexItem>
      </Flex>
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            disabled
            kind="simple"
            size="accent"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            disabled
            kind="simple"
            size="normal"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
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
            data-testid="no"
            size="accent"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="normal"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="minor"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```

## Loading Button

При загрузке в кнопке появляется лоадер.

```jsx
<Block>
  <BlockContent>
    <Spacer size="xl">
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            loading
            kind="brand"
            size="accent"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            loading
            kind="brand"
            size="normal"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem>
          <Button
            data-testid="button"
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
            data-testid="button"
            loading
            kind="simple"
            size="accent"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            loading
            kind="simple"
            size="normal"
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            loading
            kind="simple"
            size="minor"
            text="Нажать"
          />
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```

## Icon Button

Кнопки могут использоваться с иконками.

```jsx
<Block>
  <BlockContent>
    <Spacer size="xl">
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="brand"
            size="accent"
            icon={<Icon name="star" />}
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="brand"
            size="normal"
            icon={<Icon name="star" />}
            text="Нажать"
          />
        </FlexItem>
        <FlexItem>
          <Button
            data-testid="button"
            kind="brand"
            size="minor"
            icon={<Icon name="star" />}
            text="Нажать"
          />
        </FlexItem>
      </Flex>
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="simple"
            size="accent"
            icon={<Icon name="star" />}
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="simple"
            size="normal"
            icon={<Icon name="star" />}
            text="Нажать"
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="simple"
            size="minor"
            icon={<Icon name="star" />}
            text="Нажать"
          />
        </FlexItem>
      </Flex>
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="accent"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            icon
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="normal"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            icon
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="minor"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            icon
            stub
          />
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```

## Round Button

```jsx
<Block>
  <BlockContent>
    <Spacer size="xl">
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="brand"
            size="accent"
            icon={<Icon name="star" />}
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="brand"
            size="normal"
            icon={<Icon name="star" />}
          />
        </FlexItem>
        <FlexItem>
          <Button
            data-testid="button"
            kind="brand"
            size="minor"
            icon={<Icon name="star" />}
          />
        </FlexItem>
      </Flex>
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="simple"
            size="accent"
            icon={<Icon name="star" />}
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="simple"
            size="normal"
            icon={<Icon name="star" />}
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="button"
            kind="simple"
            size="minor"
            icon={<Icon name="star" />}
          />
        </FlexItem>
      </Flex>
      <Flex align="flex-start">
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="accent"
            kind="brand"
            type="button"
            icon
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="normal"
            kind="brand"
            type="button"
            icon
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            data-testid="no"
            size="minor"
            kind="brand"
            type="button"
            icon
            stub
          />
        </FlexItem>
      </Flex>
    </Spacer>
  </BlockContent>
</Block>
```
