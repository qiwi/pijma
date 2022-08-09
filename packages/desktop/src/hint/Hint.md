### Маленькие

```jsx {"id":"small","actions":[{"action":"click","selector":"svg","wait":300,"preview":"[role=tooltip]"}]}
const [show, setShow] = React.useState(false)
return (
  <Hint
    show={show}
    placement="right"
    children="Подсказка"
    onShow={(show) => setShow(!show)}
    onHide={() => setShow(false)}
  />
)
```

### Большие

```jsx {"id":"large","actions":[{"action":"click","selector":"svg","wait":300,"preview":"[role=tooltip]"}]}
const [show, setShow] = React.useState(false)
return (
  <Hint
    show={show}
    placement="right"
    onShow={(show) => setShow(!show)}
    onHide={() => setShow(false)}
  >
    <Spacer>
      <Heading size="4" children="Заголовок" />
      <Paragraph>
        Мы берем комиссию за определенный спопоб
        <br />
        оплаты — этим мы покрываем раходы на оплату
        <br />
        услуги и даем вам возможность платить любым
        <br />
        удобным способом. Мы честно показываем,
        <br />
        сколько вам придется доплатить при оплате
        <br />
        определенным способом.
      </Paragraph>
    </Spacer>
  </Hint>
)
```
