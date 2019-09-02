Компонент используется как контейнер для выпадающих списков, календаря и выбора периода в датах. Состоит из заголовка, контейнера под контент и футера.

Футер чаще всего будет использоваться как контейнер для кнопок.

```jsx
<Block>
  <BlockContent>
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
  </BlockContent>
</Block>
```

Пример компонента с большим содержимым.
```jsx
<Block>
  <BlockContent>
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
  </BlockContent>
</Block>
```


## DropUp второго уровня

Компонент может иметь второй уровень, в этом случае рядом с заголовком появляется кнопка «Назад», для перехода на уровень выше. Количество уровней не ограничено.

```jsx
<Block>
  <BlockContent>
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
  </BlockContent>
</Block>
```
