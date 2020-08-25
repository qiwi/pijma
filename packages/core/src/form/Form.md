```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <Form
        onChange={() => ({username: "Username validation Error"})}>
        {(renderProps) => (
          <Spacer size="xs">
            <TextField
              title="Логин"
              type="text"
              name="username"
              value={state.username}
              error={renderProps.errors.username}
              onBlur={renderProps.onBlur}
              onChange={username => setState({username})}
            />
            <PasswordField
              name="password"
              title="Пароль"
              value={state.password}
              error={renderProps.errors.password}
              onBlur={renderProps.onBlur}
              onChange={password => setState({password})}
            />
            <Button
              type="submit"
              kind="brand"
              size="normal"
              text="Отправить"
              onClick={() => null}
            />
          </Spacer>
        )}
      </Form>
    </Box>
  </BlockContent>
</Block>
```
