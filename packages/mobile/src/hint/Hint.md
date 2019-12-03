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
          onClick={(top) => setState({top})}
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
          onClick={(right) => setState({right})}
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
          onClick={(bottom) => setState({bottom})}
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
          onClick={(left) => setState({left})}
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
          onClick={(left) => setState({left})}
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
          onClick={(left_start) => setState({left_start})}
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
          onClick={(left_end) => setState({left_end})}
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
          onClick={(bottom) => setState({bottom})}
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
          onClick={(bottom_start) => setState({bottom_start})}
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
          onClick={(bottom_end) => setState({bottom_end})}
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
          onClick={(right) => setState({right})}
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
          onClick={(right_start) => setState({right_start})}
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
          onClick={(right_end) => setState({right_end})}
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
          onClick={(top) => setState({top})}
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
          onClick={(top_start) => setState({top_start})}
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
          onClick={(top_end) => setState({top_end})}
        />
      </FlexItem>
    </Flex>
  </FlexItem>
</Flex>
```
