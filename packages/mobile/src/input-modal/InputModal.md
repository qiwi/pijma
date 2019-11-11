Рекомендуемый размер заголовка [H2](#/Компоненты/Heading) с основным текстом [Body M]() (Normal).

В окнах применяются [Brand Button](#/Компоненты/Button) и [Simple Button](#/Компоненты/Button) в размере Normal.

```jsx
<Block>
  <BlockContent>
    <Actions size="normal">
      <Button
        kind="simple"
        size="normal"
        type="button"
        text="Показать окно"
        onClick={() => setState({show: true})}
      />
    </Actions>
    <InputModal
      show={state.show}
      closable
      backdropClose
      submitIcon="search"
      onBack={() => setState({show: false})}
      onSubmit={() => setState({show: false})}
      onHide={() => setState({show: false})}
      children={
        <Spacer size="xl">
          <Actions size="normal">
            <Button
              kind="brand"
              size="normal"
              type="button"
              text="Удалить"
              onClick={() => setState({show: false})}
            />
            <Button
              kind="simple"
              size="normal"
              type="button"
              text="Отменить"
              onClick={() => setState({show: false})}
            />
          </Actions>
        </Spacer>
      }
    />
  </BlockContent>
</Block>
```
