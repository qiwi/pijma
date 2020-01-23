### Small

```jsx
initialState = {top: false, bottom: false, left: false, right: false};
<Flex direction="column">
  <FlexItem>
    <Flex direction="column" align="center">
      <FlexItem>
        <Caption>TOP</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.top}
          size="small"
          placement="top"
          content="Hint Text"
          onShow={(top) => setState({top: !state.top})}
          onHide={(top) => setState({top: false})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
  <FlexItem>
    <Flex direction="column">
      <FlexItem>
        <Caption>RIGHT</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.right}
          size="small"
          placement="right"
          content="Hint Text"
          onShow={(right) => setState({right: !state.right})}
          onHide={(right) => setState({right: false})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
  <FlexItem>
    <Flex direction="column" align="center">
      <FlexItem>
        <Caption>BOTTOM</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.bottom}
          size="small"
          placement="bottom"
          content="Hint Text"
          onShow={(bottom) => setState({bottom: !state.bottom})}
          onHide={(bottom) => setState({bottom: false})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
  <FlexItem>
    <Flex direction="column" align="flex-end">
      <FlexItem>
        <Caption>LEFT</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.left}
          size="small"
          placement="left"
          content="Hint Text"
          onShow={(left) => setState({left: !state.left})}
          onHide={(left) => setState({left: false})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
</Flex>
```

### Strong

```jsx
initialState = {
  top_start: false,
  top: false,
  top_end: false,
  bottom_start: false,
  bottom: false,
  bottom_end: false,
  left_start: false,
  left: false,
  left_end: false,
  right_start: false,
  right: false,
  right_end: false
};
<Flex direction="column">
  <FlexItem>
    <Flex direction="column" align="flex-end">
      <FlexItem>
        <Caption>LEFT</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.left}
          size="strong"
          placement="left"
          content="Text"
          title="Title"
          width={61}
          onShow={(left) => setState({left: !state.left})}
          onHide={(left) => setState({left: false})}
        />
      </FlexItem>
      <FlexItem mt={6}>
        <Caption>LEFT START</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.left_start}
          size="strong"
          placement="left-start"
          title="Title"
          content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом. Мы честно показываем, сколько вам придется доплатить при оплате определенным способом."
          width={61}
          onShow={(left_start) => setState({left_start: !state.left_start})}
          onHide={(left_start) => setState({left_start: false})}
        />
      </FlexItem>
      <FlexItem mt={6}>
        <Caption>LEFT END</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.left_end}
          size="strong"
          placement="left-end"
          title="Title"
          content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом. Мы честно показываем, сколько вам придется доплатить при оплате определенным способом."
          width={61}
          onShow={(left_end) => setState({left_end: !state.left_end})}
          onHide={(left_end) => setState({left_end: false})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
  <FlexItem>
    <Flex direction="column" align="center">
      <FlexItem>
        <Caption>BOTTOM</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.bottom}
          size="strong"
          placement="bottom"
          content="Text"
          title="Title"
          width={61}
          onShow={(bottom) => setState({bottom: !state.bottom})}
          onHide={(bottom) => setState({bottom: false})}
        />
      </FlexItem>
      <FlexItem mt={6}>
        <Caption>BOTTOM START</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.bottom_start}
          size="strong"
          placement="bottom-start"
          title="Title"
          content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом. Мы честно показываем, сколько вам придется доплатить при оплате определенным способом."
          width={61}
          onShow={(bottom_start) => setState({bottom_start: !state.bottom_start})}
          onHide={(bottom_start) => setState({bottom_start: false})}
        />
      </FlexItem>
      <FlexItem mt={6}>
        <Caption>BOTTOM END</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.bottom_end}
          size="strong"
          placement="bottom-end"
          title="Title"
          content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом. Мы честно показываем, сколько вам придется доплатить при оплате определенным способом."
          width={61}
          onShow={(bottom_end) => setState({bottom_end: !state.bottom_end})}
          onHide={(bottom_end) => setState({bottom_end: false})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
<FlexItem>
    <Flex direction="column">
      <FlexItem>
        <Caption>RIGHT</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.right}
          size="strong"
          placement="right"
          content="Text"
          title="Title"
          width={61}
          onShow={(right) => setState({right: !state.right})}
          onHide={(right) => setState({right: false})}
        />
      </FlexItem>
      <FlexItem mt={6}>
        <Caption>RIGHT START</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.right_start}
          size="strong"
          placement="right-start"
          content="Text"
          title="Title"
          content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом. Мы честно показываем, сколько вам придется доплатить при оплате определенным способом."
          width={61}
          onShow={(right_start) => setState({right_start: !state.right_start})}
          onHide={(right_start) => setState({right_start: false})}
        />
      </FlexItem>
      <FlexItem mt={6}>
        <Caption>RIGHT END</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.right_end}
          size="strong"
          placement="right-end"
          title="Title"
          content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом. Мы честно показываем, сколько вам придется доплатить при оплате определенным способом."
          width={61}
          onShow={(right_end) => setState({right_end: !state.right_end})}
          onHide={(right_end) => setState({right_end: false})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
  <FlexItem>
    <Flex direction="column" align="center">
      <FlexItem>
        <Caption>TOP</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.top}
          size="strong"
          placement="top"
          content="Text"
          title="Title"
          width={61}
          onShow={(top) => setState({top: !state.top})}
          onHide={(top) => setState({top: false})}
        />
      </FlexItem>
      <FlexItem mt={6}>
        <Caption>TOP START</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.top_start}
          size="strong"
          placement="top-start"
          title="Title"
          content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом. Мы честно показываем, сколько вам придется доплатить при оплате определенным способом."
          width={61}
          onShow={(top_start) => setState({top_start: !state.top_start})}
          onHide={(top_start) => setState({top_start: false})}
        />
      </FlexItem>
      <FlexItem mt={6}>
        <Caption>TOP END</Caption>
      </FlexItem>
      <FlexItem mt={3}>
        <Hint
          show={state.top_end}
          size="strong"
          placement="top-end"
          title="Title"
          content="Мы берем комиссию за определенный спопоб оплаты — этим мы покрываем раходы на оплату услуги и даем вам возможность платить любым удобным способом. Мы честно показываем, сколько вам придется доплатить при оплате определенным способом."
          width={61}
          onShow={(top_end) => setState({top_end: !state.top_end})}
          onHide={(top_end) => setState({top_end: false})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
</Flex>
```
