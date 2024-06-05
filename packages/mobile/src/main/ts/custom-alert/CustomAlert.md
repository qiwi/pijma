```jsx
<CustomAlert
    data-testid="cutsom-alert"
    icon={<CircleBellIcon color="#865ED3"/>}
    bg="#EEE4FF"
    onHide={() => null}
>
    <Flex align="center">
        <FlexItem>
            <Text>
                Это QIWI Кошелек со счётом в тенге — пользуйтесь им как обычно. Кошелёк со счётом в рублях, долларах и
                евро переехал на другой сайт. Чтобы проверить статус требования о возврате, перейдите на qiwiwallet.ru
            </Text>
        </FlexItem>
        <FlexItem ml={4}>
            <Button
                data-testid="button"
                kind="simple"
                size="minor"
                text="Подробнее"
            />
        </FlexItem>
    </Flex>
</CustomAlert>
```
