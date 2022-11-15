```jsx
<Block>
  <BlockContent>
    <Spacer size="l">
      <ExtendedProgressBar value={0} />
      <ExtendedProgressBar value={0.25} />
      <ExtendedProgressBar value={0.5} />
      <ExtendedProgressBar value={0.75} />
      <ExtendedProgressBar value={1} />
      <ExtendedProgressBar
        value={250}
        maxValue={1000}
        titleStart="Потрачено"
        titleEnd="Осталось"
        valueAffix="\u20BD"
      />
      <ExtendedProgressBar stub />
      <ExtendedProgressBar stub titleStart="stub" titleEnd="stub" />
    </Spacer>
  </BlockContent>
</Block>
```
