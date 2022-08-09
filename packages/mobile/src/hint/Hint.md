```jsx {"actions":[{"action":"click","selector":"svg","wait":500,"preview":"[role=dialog] [role=document]"}]}
const [show, setShow] = React.useState(false)
return (
  <Hint
    show={show}
    onShow={(show) => setShow(!show)}
    onHide={() => setShow(false)}
  >
    <Spacer>
      <Heading size="2" children="Заголовок" />
      <Paragraph>
        Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем
        раходы на оплату услуги и даем вам возможность платить любым удобным
        способом. Мы честно показываем, сколько вам придется доплатить при
        оплате определенным способом.
      </Paragraph>
    </Spacer>
  </Hint>
)
```
