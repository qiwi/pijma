```jsx
<Block>
  <BlockContent>
    <Spacer size="xl">
      <ExtendedProgressBar value={0} />
      <ExtendedProgressBar value={0.25} />
      <ExtendedProgressBar value={0.5} />
      <ExtendedProgressBar value={0.75} />
      <ExtendedProgressBar value={1} />
      <ExtendedProgressBar stub />
      <ExtendedProgressBar
        value={250}
        maxValue={1000}
        titleStart="Потрачено"
        titleEnd="Осталось"
        formatValue={(value) => `${value} \u20BD`}
      />
      <ExtendedProgressBar stub titleStart="stub" titleEnd="stub" />
    </Spacer>
  </BlockContent>
</Block>
```
