#### ContentSearch

```jsx
const banks = [
  {
    logo: require('./media/sber.png'),
    title: 'Сбербанк',
    description: 'ПАО «Сбербанк России»',
  },
  {
    logo: require('./media/alpha.png'),
    title: 'Альфа-Банк',
    description: 'АО «Альфа-Банк»',
  },
  {
    logo: require('./media/otkritie.png'),
    title: 'Банк «Открытие»',
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    logo: require('./media/vtb.png'),
    title: 'Банк ВТБ',
    description: 'Банк ВТБ (ПАО)',
  },
  {
    logo: require('./media/mdm.png'),
    title: 'МДМ Банк',
    description: 'ПАО «МДМ Банк»',
  },
  {
    logo: require('./media/sber.png'),
    title: 'Сбербанк',
    description: 'ПАО «Сбербанк России»',
  },
  {
    logo: require('./media/alpha.png'),
    title: 'Альфа-Банк',
    description: 'АО «Альфа-Банк»',
  },
  {
    logo: require('./media/otkritie.png'),
    title: 'Банк «Открытие»',
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    logo: require('./media/vtb.png'),
    title: 'Банк ВТБ',
    description: 'Банк ВТБ (ПАО)',
  },
  {
    logo: require('./media/mdm.png'),
    title: 'МДМ Банк',
    description: 'ПАО «МДМ Банк»',
  },
  {
    logo: require('./media/sber.png'),
    title: 'Сбербанк',
    description: 'ПАО «Сбербанк России»',
  },
  {
    logo: require('./media/alpha.png'),
    title: 'Альфа-Банк',
    description: 'АО «Альфа-Банк»',
  },
  {
    logo: require('./media/otkritie.png'),
    title: 'Банк «Открытие»',
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    logo: require('./media/vtb.png'),
    title: 'Банк ВТБ',
    description: 'Банк ВТБ (ПАО)',
  },
  {
    logo: require('./media/mdm.png'),
    title: 'МДМ Банк',
    description: 'ПАО «МДМ Банк»',
  },
];
initialState = {
  value: '',
  show: false,
  banks: [],
};
filterBanks = (value) => banks.filter(bank => {
  return (
    value !== '' && (
      bank.description.toLowerCase().indexOf(value.toLowerCase()) !== -1
      || bank.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
  );
});
<Block>
  <BlockContent>
    <Box width={64}>
      <ContentSearch
        value={state.value}
        items={state.banks}
        show={state.show}
        error={state.value === ''}
        onShow={() => setState({show: true})}
        onHide={() => setState({show: false})}
        onCancel={() => setState(initialState)}
        onItemClick={(item) => setState({
          value: item.title,
          banks: filterBanks(item.title)
        })}
        onChange={(value) => setState({
          value: value,
          banks: filterBanks(value)
        })}
        result={state.banks.length > 0 ? (
          <Link onClick={() => setState({show: false})}>
            Показать все
          </Link>
        ) : (
          <Paragraph>
            Ничего не найдено, попробуйте
            <Link onClick={() => setState({
              value: 'Сбербанк',
              banks: filterBanks('Сбербанк'),
            })}>
              Сбербанк
            </Link>
          </Paragraph>
        )}
      />
    </Box>
  </BlockContent>
</Block>
```
