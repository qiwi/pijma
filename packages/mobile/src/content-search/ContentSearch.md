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
const initialState = {
  value: '',
  show: false,
  loading: false,
  banks: [],
};
const filterBanks = (value) => banks.filter(bank => {
  return (
    value !== '' && (
      bank.description.toLowerCase().indexOf(value.toLowerCase()) !== -1
      || bank.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
  );
});
const getBanks = (value) => {
  setState({loading: true})
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setState({loading: false});
      resolve(filterBanks(value));
    }, 1000);
  });
}
const equals = (a, b) => {
  return a.title === b.title
};
const selectItem = (item) => setState({
  show: false,
  loading: false,
  value: item.title,
  banks: filterBanks(item.title),
});
<Block>
  <BlockContent>
    <Box width={64}>
      <ContentSearch
        value={state.value}
        items={state.banks}
        show={state.show}
        loading={state.loading}
        error={state.value === ''}
        onShow={() => setState({show: true})}
        onHide={() => setState({show: false})}
        onCancel={() => setState(initialState)}
        onSubmit={() => setState({show: false})}
        onItemSelect={selectItem}
        equals={equals}
        onChange={(value) => {
          setState({value});
          getBanks(value).then((banks) => setState({banks}));
        }}
        result={state.banks.length > 0 ? (
          <Link onClick={() => setState({show: false})}>
            Показать все
          </Link>
        ) : (
          <Paragraph>
            Ничего не найдено, попробуйте
            <Link onClick={() => {
              setState({value: 'Сбербанк'});
              getBanks('Сбербанк').then((banks) => setState({banks}));
            }}>
              Сбербанк
            </Link>
          </Paragraph>
        )}
      />
    </Box>
  </BlockContent>
</Block>
```
