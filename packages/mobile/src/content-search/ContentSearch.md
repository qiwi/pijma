#### ContentSearch

```jsx
const banks = [
  {
    value: 'Сбербанк',
    title: 'Сбербанк',
    logo: require('./media/sber.png'),
    description: 'ПАО «Сбербанк России»',
  },
  {
    value: 'Альфа-Банк',
    title: 'Альфа-Банк',
    logo: require('./media/alpha.png'),
    description: 'АО «Альфа-Банк»',
  },
  {
    value: 'Банк «Открытие»',
    title: 'Банк «Открытие»',
    logo: require('./media/open.png'),
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    value: 'Банк ВТБ',
    title: 'Банк ВТБ',
    logo: require('./media/vtb.png'),
    description: 'Банк ВТБ (ПАО)',
  },
  {
    value: 'МДМ Банк',
    title: 'МДМ Банк',
    logo: require('./media/mdm.png'),
    description: 'ПАО «МДМ Банк»',
  },
  {
    value: 'DeltaCredit Банк',
    title: 'DeltaCredit Банк',
    logo: require('./media/delta.png'),
    description: 'АО КБ ДЕЛЬТАКРЕДИТ',
  },
  {
    value: 'ОТП Банк',
    title: 'ОТП Банк',
    logo: require('./media/otp.png'),
    description: 'АО «ОТП-Банк»',
  },
  {
    value: 'Почта Банк',
    title: 'Почта Банк',
    logo: require('./media/pb.png'),
    description: 'ПАО «Почта Банк»',
  },
  {
    value: 'Промсвязьбанк',
    title: 'Промсвязьбанк',
    logo: require('./media/psb.png'),
    description: 'ПАО «ПРОМСВЯЗЬБАНК»',
  },
  {
    value: 'Райффайзенбанк',
    title: 'Райффайзенбанк',
    logo: require('./media/rai.png'),
    description: 'АО «Райффайзенбанк»',
  },
  {
    value: 'Ренессанс Кредит Банк',
    title: 'Ренессанс Кредит Банк',
    logo: require('./media/rkb.png'),
    description: 'КБ "Ренессанс Кредит" (ООО)',
  },
  {
    value: 'РокетБанк',
    title: 'РокетБанк',
    logo: require('./media/roket.png'),
    description: 'ФИЛИАЛ РОКЕТБАНК КИВИ БАНК (АКЦИОНЕРНОЕ ОБЩЕСТВО)',
  },
  {
    value: 'Совкомбанк',
    title: 'Совкомбанк',
    logo: require('./media/sov.png'),
    description: 'Публичное акционерное общество «Совкомбанк»',
  },
  {
    value: 'Русский Стандарт',
    title: 'Русский Стандарт',
    logo: require('./media/std.png'),
    description: 'АО «Банк Русский Стандарт»',
  },
];
const initialState = {
  value: '',
  show: false,
  loading: false,
  banks: [],
};
const filterBanks = (value) => banks.filter(bank => {
  return value !== '' && bank.value.toLowerCase().indexOf(value.toLowerCase()) !== -1;
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
  return a.value === b.value
};
const selectItem = (item) => setState({
  show: false,
  loading: false,
  value: item.value,
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
