Компонент используется как контейнер для выпадающих списков, календаря и выбора периода в датах. Состоит из заголовка,
контейнера под контент и футера.

Футер чаще всего будет использоваться как контейнер для кнопок.

```jsx {"id":"1","actions":[{"action":"click","selector":"button","key":"show","preview":"[role=dialog] [role=document]"},{"action":"click","selector":"[role=dialog] [aria-label=close]","key":"hide"}]}
const [show, setShow] = React.useState(undefined)
return (
  <Block>
    <BlockContent>
      <Actions>
        <Button
          kind="simple"
          size="normal"
          type="button"
          text="Показать"
          onClick={() => setShow(!show)}
        />
      </Actions>
      <DropUp
        show={show}
        onHide={() => setShow(false)}
        title="Заголовок"
        children={
          <Flex height={14} align="center" px={0} onClick={() => null}>
            <FlexItem ml={6}>
              <Paragraph size="m" bold>
                Опция
              </Paragraph>
            </FlexItem>
          </Flex>
        }
        footer={
          <Actions>
            <Button
              kind="brand"
              size="normal"
              type="button"
              text="Закрыть"
              onClick={() => setShow(!show)}
            />
          </Actions>
        }
      />
    </BlockContent>
  </Block>
)
```

Пример компонента с большим содержимым.

```jsx {"id":"2"}
const [show, setShow] = React.useState(undefined)
return (
  <Block>
    <BlockContent>
      <Actions>
        <Button
          kind="simple"
          size="normal"
          type="button"
          text="Показать"
          onClick={() => setShow(!show)}
        />
      </Actions>
      <DropUp
        show={show}
        onHide={() => setShow(false)}
        title="Заголовок"
        children={
          <React.Fragment>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
            <Flex height={14} align="center" px={0} onClick={() => null}>
              <FlexItem ml={6}>
                <Paragraph size="m" bold>
                  Опция
                </Paragraph>
              </FlexItem>
            </Flex>
          </React.Fragment>
        }
        footer={
          <Actions>
            <Button
              kind="brand"
              size="normal"
              type="button"
              text="Закрыть"
              onClick={() => setShow(!show)}
            />
          </Actions>
        }
      />
    </BlockContent>
  </Block>
)
```

## DropUp второго уровня

Компонент может иметь второй уровень, в этом случае рядом с заголовком появляется кнопка «Назад», для перехода на
уровень выше. Количество уровней не ограничено.

```jsx {"id":"3"}
const [show, setShow] = React.useState(undefined)
const [showHorizontal, setShowHorizontal] = React.useState(undefined)
return (
  <Block>
    <BlockContent>
      <Actions>
        <Button
          kind="simple"
          size="normal"
          type="button"
          text="Показать"
          onClick={() => setShow(!show)}
        />
      </Actions>
      <DropUp
        show={show}
        onHide={() => setShow(false)}
        title="Заголовок"
        children={
          <Flex height={14} align="center" px={0} onClick={() => null}>
            <FlexItem ml={6}>
              <Paragraph size="m" bold>
                Опция
              </Paragraph>
            </FlexItem>
          </Flex>
        }
        footer={
          <Actions>
            <Button
              kind="brand"
              size="normal"
              type="button"
              text="Показать второй уровень"
              onClick={() => {
                setShowHorizontal(!showHorizontal)
                setShow(!show)
              }}
            />
            <Button
              kind="simple"
              size="normal"
              type="button"
              text="Закрыть"
              onClick={() => setShow(!show)}
            />
          </Actions>
        }
      />
      <DropUp
        show={showHorizontal}
        onHide={() => setShowHorizontal(false)}
        onBack={() => {
          setShowHorizontal(false)
          setShow(true)
        }}
        horizontal
        title="Заголовок"
        children={
          <Flex height={14} align="center" px={0} onClick={() => null}>
            <FlexItem ml={6}>
              <Paragraph size="m" bold>
                Опция
              </Paragraph>
            </FlexItem>
          </Flex>
        }
        footer={
          <Actions>
            <Button
              kind="simple"
              size="normal"
              type="button"
              text="Закрыть"
              onClick={() => setShowHorizontal(!showHorizontal)}
            />
          </Actions>
        }
      />
    </BlockContent>
  </Block>
)
```
