### Default

```jsx
  <ExpansionPanel
    additionalTitle="Дополнительный заголовок"
    title="Заголовок"
    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    content={
      <Spacer size="l">
        <Paragraph
          children="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Actions size="accent">
          <Button
            type="button"
            kind="brand"
            size="accent"
            text="Кнопочка"
            onClick={() => undefined}
          />
        </Actions>
      </Spacer>
    }
  />
  ```

### Faded

```jsx
  <ExpansionPanel
    additionalTitle="Дополнительный заголовок"
    title="Заголовок"
    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    content={
      <Spacer size="l">
        <Paragraph
          children="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Actions size="minor">
          <Button
            type="button"
            kind="brand"
            size="accent"
            text="Кнопочка"
            onClick={() => undefined}
          />
        </Actions>
      </Spacer>
    }
    faded
  />
  ```
### Stub

```jsx
  <ExpansionPanel
    additionalTitle="Дополнительный заголовок"
    title="Заголовок"
    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    content={
      <Spacer size="l">
        <Paragraph
          children="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Actions size="minor">
          <Button
            type="button"
            kind="brand"
            size="accent"
            text="Кнопочка"
            onClick={() => undefined}
          />
        </Actions>
      </Spacer>
    }
    stub
  />
  ```
