```jsx
initialState = {top: false, bottom: false, left: false, right: false};
<Flex justify='space-between'>
  <FlexItem>
    <Hint
      show={state.right}
      size="small"
      placement="right"
      content="Hint Text"
      onClick={(right) => setState({right})}
    />
  </FlexItem>
  <FlexItem>
    <Hint
      show={state.top}
      size="small"
      placement="top"
      content="Hint Text"
      onClick={(top) => setState({top})}
    />
  </FlexItem>
  <FlexItem>
    <Hint
      show={state.bottom}
      size="small"
      placement="bottom"
      content="Hint Text"
      onClick={(bottom) => setState({bottom})}
    />
  </FlexItem>
  <FlexItem>
    <Hint
      show={state.left}
      size="small"
      placement="left"
      content="Hint Text"
      onClick={(left) => setState({left})}
    />
  </FlexItem>
</Flex>
```

```jsx
initialState = {top: false, bottom: false, left: false, right: false};
<Flex justify='space-between'>
  <FlexItem>
    <Hint
      show={state.right}
      onClick={(right) => setState({right})}
      size="strong"
      placement="right"
      title="Title"
      width={60}
      content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом."
    />
  </FlexItem>
  <FlexItem>
    <Hint
      show={state.top}
      onClick={(top) => setState({top})}
      size="strong"
      placement="top"
      title="Title"
      width={60}
      content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом."
    />
  </FlexItem>
  <FlexItem>
    <Hint
      show={state.bottom}
      onClick={(bottom) => setState({bottom})}
      size="strong"
      placement="bottom"
      title="Title"
      width={60}
      content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом."
    />
  </FlexItem>
  <FlexItem>
    <Hint
      show={state.left}
      onClick={(left) => setState({left})}
      size="strong"
      placement="left"
      title="Title"
      width={60}
      content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом."
    />
  </FlexItem>
</Flex>
```
