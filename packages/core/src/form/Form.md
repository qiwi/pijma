```jsx
<Block>
  <BlockContent>
    <Form onSubmit={() => alert('Отправлено')}>
       <TextField
         title="Поле ввода"
         type="text"
         value=""
       />
       <Button
         kind="brand"
         type="submit"
         size="accent"
         text="Отправить"
       />
    </Form>
  </BlockContent>
</Block>
```
