Рекомендуемый размер заголовка [H2](#/Компоненты/Heading) с основным текстом [Body M]() (Normal).

В окнах применяются [Brand Button](#/Компоненты/Button) и [Simple Button](#/Компоненты/Button) в размере Normal.

```jsx {"id":"1","actions":[{"action":"click","selector":"button","key":"show","preview":"[role=dialog]"},{"action":"click","selector":"[role=dialog] [aria-label=back]","key":"back"}]}
const [show, setShow] = React.useState(undefined)
return (
  <Block>
    <BlockContent>
      <Actions size="normal">
        <Button
          kind="simple"
          size="normal"
          type="button"
          text="Показать окно"
          onClick={() => setShow(true)}
        />
      </Actions>
      <InputModal
        show={show}
        closable
        backdropClose
        submitIcon="search"
        onBack={() => setShow(false)}
        onSubmit={() => setShow(false)}
        onHide={() => setShow(false)}
        children={
          <Spacer size="xl">
            <Actions size="normal">
              <Button
                kind="brand"
                size="normal"
                type="button"
                text="Удалить"
                onClick={() => setShow(false)}
              />
              <Button
                kind="simple"
                size="normal"
                type="button"
                text="Отменить"
                onClick={() => setShow(false)}
              />
            </Actions>
          </Spacer>
        }
      />
    </BlockContent>
  </Block>
)
```
