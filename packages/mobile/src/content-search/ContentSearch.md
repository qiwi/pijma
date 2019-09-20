#### ContentSearch

```jsx
const banks = [
  {
    id: '1',
    logo: require('./media/sber.png'),
    title: 'Сбербанк',
    description: 'ПАО «Сбербанк России»',
  },
  {
    id: '2',
    logo: require('./media/alpha.png'),
    title: 'Альфа-Банк',
    description: 'АО «Альфа-Банк»',
  },
  {
    id: '3',
    logo: require('./media/otkritie.png'),
    title: 'Банк «Открытие»',
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    id: '4',
    logo: require('./media/vtb.png'),
    title: 'Банк ВТБ',
    description: 'Банк ВТБ (ПАО)',
  },
  {
    id: '5',
    logo: require('./media/mdm.png'),
    title: 'МДМ Банк',
    description: 'ПАО «МДМ Банк»',
  },
  {
    id: '6',
    logo: require('./media/sber.png'),
    title: 'Сбербанк',
    description: 'ПАО «Сбербанк России»',
  },
  {
    id: '7',
    logo: require('./media/alpha.png'),
    title: 'Альфа-Банк',
    description: 'АО «Альфа-Банк»',
  },
  {
    id: '8',
    logo: require('./media/otkritie.png'),
    title: 'Банк «Открытие»',
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    id: '9',
    logo: require('./media/vtb.png'),
    title: 'Банк ВТБ',
    description: 'Банк ВТБ (ПАО)',
  },
  {
    id: '10',
    logo: require('./media/mdm.png'),
    title: 'МДМ Банк',
    description: 'ПАО «МДМ Банк»',
  },
  {
    id: '11',
    logo: require('./media/sber.png'),
    title: 'Сбербанк',
    description: 'ПАО «Сбербанк России»',
  },
  {
    id: '12',
    logo: require('./media/alpha.png'),
    title: 'Альфа-Банк',
    description: 'АО «Альфа-Банк»',
  },
  {
    id: '13',
    logo: require('./media/otkritie.png'),
    title: 'Банк «Открытие»',
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    id: '14',
    logo: require('./media/vtb.png'),
    title: 'Банк ВТБ',
    description: 'Банк ВТБ (ПАО)',
  },
  {
    id: '15',
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
        onSubmit={selectItem}
        onItemClick={selectItem}
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
