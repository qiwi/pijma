## Brand Button
Brand button в размерах Normal и Minor используется для приоритетных или завершающих действий. В размере Accent — в качестве основной кнопки в промо-коммуникациях и на платежных формах.

```jsx
<Spacer size="xl">
    <Flex align="flex-start">
        <FlexItem pr={4}>
            <Button
                kind="brand"
                text="Нажать"
            />
        </FlexItem>
        <FlexItem pr={4}>
            <Button
                disabled
                kind="brand"
                text="Нажать"
            />
        </FlexItem>
    </Flex>
</Spacer>
```
## Simple Button
Simple Button используется для второстепенных действий в сочетании с Brand Button или самостоятельно.

```jsx
<Spacer size="xl">
    <Flex align="flex-start">
        <FlexItem pr={4}>
            <Button
                kind="simple"
                text="Нажать"
            />
        </FlexItem>
        <FlexItem pr={4}>
            <Button
                disabled
                kind="simple"
                text="Нажать"
            />
        </FlexItem>
    </Flex>
</Spacer>
```
## Loading Button
При загрузке в кнопках появляется лоадер.

```jsx
<Spacer size="xl">
    <Flex align="flex-start">
        <FlexItem pr={4}>
            <Button
                loading
                kind="brand"
                text="Нажать"
            />
        </FlexItem>
            <FlexItem pr={4}>
            <Button
                loading
                kind="simple"
                text="Нажать"
            />
        </FlexItem>
    </Flex>
</Spacer>
```

## Icon Button
Brand Button и Simple Button могут использоваться не только с текстом, но и с иконкой.

```jsx
<Spacer size="xl">
    <Flex align="flex-start">
        <FlexItem pr={4}>
            <Button
                kind="brand"
                icon={<StarIcon/>}
                text="Нажать"
            />
        </FlexItem>
            <FlexItem pr={4}>
            <Button
                kind="simple"
                icon={<StarIcon/>}
                text="Нажать"
            />
        </FlexItem>
            <FlexItem pr={4}>
            <Button
                disabled
                kind="simple"
                icon={<StarIcon/>}
                text="Нажать"
            />
        </FlexItem>
        
    </Flex>
</Spacer>
```

## Round Button
Или только с иконкой.

```jsx
<Spacer size="xl">
    <Flex align="flex-start">
        <FlexItem pr={4}>
            <Button
                kind="brand"
                icon={<StarIcon/>}
            />
        </FlexItem>
            <FlexItem pr={4}>
            <Button
                kind="simple"
                icon={<StarIcon/>}
            />
        </FlexItem>
            <FlexItem pr={4}>
            <Button
                disabled
                kind="simple"
                icon={<StarIcon/>}
            />
        </FlexItem>
    </Flex>
</Spacer>
```