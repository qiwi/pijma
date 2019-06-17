Компонент используется в качестве контейнера, может включать выпадающие списки, календари и выбор определенного периода. Состоит из заголовка, контейнера под контент и футера. В футере чаще всего располагаются кнопки.

## Пример содержимого
#### Небольшое количество контента

```jsx
<Box>
  <Actions>
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Показать"
      onClick={() => setState({show: !state.show})}
    />
  </Actions>
  <DropUp
    show={state.show}
    onHide={() => setState({show: false})}
    title="Заголовок"
    children={(
      <Flex height={14} align="center" px={0} onClick={() => null}>
        <FlexItem ml={6}>
          <Paragraph size="m" bold>Опция</Paragraph>
        </FlexItem>
      </Flex>
    )}
    footer={(
      <Actions>
        <Button
          kind="brand"
          size="normal"
          type="button"
          text="Закрыть"
          onClick={() => setState({show: !state.show})}
        />
      </Actions>
    )}
  />
</Box>
```

#### Много контента
```jsx
<Box>
  <Actions>
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Показать"
      onClick={() => setState({show: !state.show})}
    />
  </Actions>
  <DropUp
    show={state.show}
    onHide={() => setState({show: false})}
    title="Заголовок"
    children={(
      <React.Fragment>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
        <Flex height={14} align="center" px={0} onClick={() => null}>
          <FlexItem ml={6}>
            <Paragraph size="m" bold>Опция</Paragraph>
          </FlexItem>
        </Flex>
      </React.Fragment>
    )}
    footer={(
      <Actions>
        <Button
          kind="brand"
          size="normal"
          type="button"
          text="Закрыть"
          onClick={() => setState({show: !state.show})}
        />
      </Actions>
    )}
  />
</Box>
```


## Многоуровневый DropUp

У компонента может быть несколько уровней, чаще всего их два. В этом случае на втором уровне слева от заголовка появляется кнопка «Назад», по нажатию на которую можно вернуться на уровень выше. Количество подуровней не ограничено.

```jsx
<Box>
  <Actions>
    <Button
      kind="simple"
      size="normal"
      type="button"
      text="Показать"
      onClick={() => setState({show: !state.show})}
    />
  </Actions>
  <DropUp
    show={state.show}
    onHide={() => setState({show: false})}
    title="Заголовок"
    children={(
      <Flex height={14} align="center" px={0} onClick={() => null}>
        <FlexItem ml={6}>
          <Paragraph size="m" bold>Опция</Paragraph>
        </FlexItem>
      </Flex>
    )}
    footer={
      <Actions>
        <Button
          kind="brand"
          size="normal"
          type="button"
          text="Показать второй уровень"
          onClick={() => setState({showHorizontal: !state.showHorizontal, show: !state.show})}
        />
        <Button
          kind="simple"
          size="normal"
          type="button"
          text="Закрыть"
          onClick={() => setState({show: !state.show})}
        />
      </Actions>
    }
  />
  <DropUp
    show={state.showHorizontal}
    onHide={() => setState({showHorizontal: false})}
    onBack={() => setState({showHorizontal: false, show: true})}
    horizontal
    title="Заголовок"
    children={(
      <Flex height={14} align="center" px={0} onClick={() => null}>
        <FlexItem ml={6}>
          <Paragraph size="m" bold>Опция</Paragraph>
        </FlexItem>
      </Flex>
    )}
    footer={
      <Actions>
        <Button
          kind="simple"
          size="normal"
          type="button"
          text="Закрыть"
          onClick={() => setState({showHorizontal: !state.showHorizontal})}
        />
      </Actions>
    }
  />
</Box>
```
