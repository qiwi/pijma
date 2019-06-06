## Brand Button

```jsx
<Block>
  <BlockContent>
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
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            size="normal"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
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
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
            size="normal"
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
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
            kind="brand"
            type="button"
            text="if you need button stub put any corrent content here"
            icon
            stub
          />
        </FlexItem>
        <FlexItem pr={4}>
          <Button
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
  </BlockContent>
</Block>    
```
