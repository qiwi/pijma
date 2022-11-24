```jsx
<Block>
  <BlockContent>
    <Spacer size="xl">
      <Spacer size="s">
        <Heading size={5}>Values</Heading>
        <Spacer size="m">
          <ExtendedProgressBar value={0} />
          <ExtendedProgressBar value={0.25} />
          <ExtendedProgressBar value={0.5} />
          <ExtendedProgressBar value={0.75} />
          <ExtendedProgressBar value={1} />
        </Spacer>
      </Spacer>
      <Spacer size="s">
        <Heading size={5}>Disabled</Heading>
        <ExtendedProgressBar disabled />
      </Spacer>
      <Spacer size="s">
        <Heading size={5}>MaxValue = 0</Heading>
        <ExtendedProgressBar value={0} maxValue={0}/>
      </Spacer>
      <Spacer size="s">
        <Heading size={5}>Stub</Heading>
        <ExtendedProgressBar stub />
      </Spacer>
      <Spacer size="s">
        <Heading size={5}>With titles</Heading>
        <ExtendedProgressBar
          value={250}
          maxValue={1000}
          titleStart="Потрачено"
          titleEnd="Осталось"
          formatValue={(value) => `${value} \u20BD`}
        />
      </Spacer>
      <Spacer size="s">
        <Heading size={5}>Disabled with titles</Heading>
        <ExtendedProgressBar
          disabled
          titleStart="Начало"
          titleEnd="Конец"
        />
      </Spacer>
      <Spacer size="s">
        <Heading size={5}>MaxValue = 0 with titles</Heading>
        <ExtendedProgressBar
          value={0}
          maxValue={0}
          titleStart="Потрачено"
          titleEnd="Осталось"
        />
      </Spacer>
      <Spacer size="s">
        <Heading size={5}>Stub with titles</Heading>
        <ExtendedProgressBar stub titleStart="stub" titleEnd="stub" />
      </Spacer>
    </Spacer>
  </BlockContent>
</Block>
```
