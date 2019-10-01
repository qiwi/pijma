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
    logo: require('./media/open.png'),
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
    logo: require('./media/delta.png'),
    title: 'DeltaCredit Банк',
    description: 'АО КБ ДЕЛЬТАКРЕДИТ',
  },
  {
    logo: require('./media/otp.png'),
    title: 'ОТП Банк',
    description: 'АО «ОТП-Банк»',
  },
  {
    logo: require('./media/pb.png'),
    title: 'Почта Банк',
    description: 'ПАО «Почта Банк»',
  },
  {
    logo: require('./media/psb.png'),
    title: 'Промсвязьбанк',
    description: 'ПАО «ПРОМСВЯЗЬБАНК»',
  },
  {
    logo: require('./media/rai.png'),
    title: 'Райффайзенбанк',
    description: 'АО «Райффайзенбанк»',
  },
  {
    logo: require('./media/rkb.png'),
    title: 'Ренессанс Кредит Банк',
    description: 'КБ "Ренессанс Кредит" (ООО)',
  },
  {
    logo: require('./media/roket.png'),
    title: 'РокетБанк',
    description: 'ФИЛИАЛ РОКЕТБАНК КИВИ БАНК (АКЦИОНЕРНОЕ ОБЩЕСТВО)',
  },
  {
    logo: require('./media/sov.png'),
    title: 'Совкомбанк',
    description: 'Публичное акционерное общество «Совкомбанк»',
  },
  {
    logo: require('./media/std.png'),
    title: 'Русский Стандарт',
    description: 'АО «Банк Русский Стандарт»',
  },
];
const initialState = {
  value: '',
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
  loading: false,
  value: item.title,
  banks: [],
});
<Block>
  <BlockContent>
    <Box width={128}>
      <ContentSearch
        value={state.value}
        items={state.banks}
        loading={state.loading}
        error={state.value === ''}
        onCancel={() => setState(initialState)}
        onSubmit={() => setState({banks: []})}
        onItemSelect={selectItem}
        equals={equals}
        onChange={(value) => {
          setState({value});
          getBanks(value).then((banks) => setState({banks}));
        }}
        result={(
          <Link onClick={() => setState({banks: []})}>
            Показать все
          </Link>
        )}
      />
    </Box>
  </BlockContent>
</Block>
```
