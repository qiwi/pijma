#### ContentSearch

```jsx
const banks = [
  {
    value: {
      id: 1,
    },
    title: 'Сбербанк',
    logo: require('./media/sber.png'),
    description: 'ПАО «Сбербанк России»',
  },
  {
    value: {
      id: 2,
    },
    title: 'Альфа-Банк',
    logo: require('./media/alpha.png'),
    description: 'АО «Альфа-Банк»',
  },
  {
    value: {
      id: 3,
    },
    title: 'Банк «Открытие»',
    logo: require('./media/open.png'),
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    value: {
      id: 4,
    },
    title: 'Банк ВТБ',
    logo: require('./media/vtb.png'),
    description: 'Банк ВТБ (ПАО)',
  },
  {
    value: {
      id: 5,
    },
    title: 'МДМ Банк',
    logo: require('./media/mdm.png'),
    description: 'ПАО «МДМ Банк»',
  },
  {
    value: {
      id: 6,
    },
    title: 'DeltaCredit Банк',
    logo: require('./media/delta.png'),
    description: 'АО КБ ДЕЛЬТАКРЕДИТ',
  },
  {
    value: {
      id: 7,
    },
    title: 'ОТП Банк',
    logo: require('./media/otp.png'),
    description: 'АО «ОТП-Банк»',
  },
  {
    value: {
      id: 8,
    },
    title: 'Почта Банк',
    logo: require('./media/pb.png'),
    description: 'ПАО «Почта Банк»',
  },
  {
    value: {
      id: 9,
    },
    title: 'Промсвязьбанк',
    logo: require('./media/psb.png'),
    description: 'ПАО «ПРОМСВЯЗЬБАНК»',
  },
  {
    value: {
      id: 10,
    },
    title: 'Райффайзенбанк',
    logo: require('./media/rai.png'),
    description: 'АО «Райффайзенбанк»',
  },
  {
    value: {
      id: 11,
    },
    title: 'Ренессанс Кредит Банк',
    logo: require('./media/rkb.png'),
    description: 'КБ "Ренессанс Кредит" (ООО)',
  },
  {
    value: {
      id: 12,
    },
    title: 'РокетБанк',
    logo: require('./media/roket.png'),
    description: 'ФИЛИАЛ РОКЕТБАНК КИВИ БАНК (АКЦИОНЕРНОЕ ОБЩЕСТВО)',
  },
  {
    value: {
      id: 13,
    },
    title: 'Совкомбанк',
    logo: require('./media/sov.png'),
    description: 'Публичное акционерное общество «Совкомбанк»',
  },
  {
    value: {
      id: 14,
    },
    title: 'Русский Стандарт',
    logo: require('./media/std.png'),
    description: 'АО «Банк Русский Стандарт»',
  },
];

const initialState = {
  suggest: '',
  loading: false,
  banks: [],
  timer: undefined,
};

const filterBanks = (title) => banks.filter(bank => {
  return title !== '' && bank.title.toLowerCase().indexOf(title.toLowerCase()) !== -1;
});

const getBanks = (suggest) => {
  setState({loading: true});
  clearTimeout(state.timer);
  return new Promise((resolve, reject) => {
    setState({timer: setTimeout(() => {
      setState({loading: false});
      resolve(filterBanks(suggest));
    }, 1000)});
  });
};

const selectItem = (value) => {
  const title = getBankByValue(value).title;
  setState({
    suggest: title,
    loading: false,
    banks: filterBanks(title),
  });
  console.log('SELECT ITEM', value)
};

const equals = (a, b) => a.id === b.id;

const submit = (suggest) => {
  console.log('SUBMIT', suggest);
};

const getBankByValue = (value) => banks.find(bank => equals(bank.value, value));

<Block>
  <BlockContent>
    <Box width={64}>
      <ContentSearch
        value={state.value}
        items={state.banks}
        suggest={state.suggest}
        loading={state.loading}
        error={state.value === ''}
        equals={equals}
        onCancel={() => setState(initialState)}
        onSubmit={submit}
        onChange={selectItem}
        onRequest={(suggest) => {
          setState({suggest});
          getBanks(suggest).then((banks) => setState({banks}));
        }}
        result={({focused, selected, hide}) => state.banks.length > 0 ? (
          <Link onClick={hide}>
            Показать все
          </Link>
        ) : (
          <Paragraph>
            Ничего не найдено, попробуйте
            <Link onClick={() => {
              setState({suggest: 'Сбербанк'});
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
