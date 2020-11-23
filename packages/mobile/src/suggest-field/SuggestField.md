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
    suggest: 'ф',
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
  loading: false,
  error: false,
  timer: undefined,
  banks: undefined,
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

const onRequest = (suggest) => {
  setState({suggest, error: suggest === ''});
  getBanks(suggest).then((banks) => setState({banks}));
};

const onCancel = () => setState(initialState);

const onChange = (value) => {
  const {title} = getBankByValue(value);
  setState({
    banks: undefined,
    value: value,
    suggest: title,
  });
};

const equals = (a, b) => a.id === b.id;

const getBankByValue = (value) => banks.find(bank => equals(bank.value, value));

<Block>
  <BlockContent>
    <Box>
      <SuggestField
        value={state.value}
        items={state.banks}
        title="Поле ввода"
        suggest={state.suggest}
        loading={state.loading}
        error={state.error}
        equals={equals}
        onCancel={onCancel}
        onChange={onChange}
        onRequest={onRequest}
        empty={state.error ? {
          text: 'Ошибка,',
          link: {
            text: 'попробуйте ещё раз',
            suggest: state.suggest,
          }
        } : {
          text: 'Ничего не найдено, попробуйте',
          link: {
            text: 'Сбербанк',
            suggest: 'Сбербанк',
          }
        }}
      />
    </Box>
  </BlockContent>
</Block>
```

## Markdown в empty и total

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
    suggest: 'ф',
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
  loading: false,
  error: false,
  timer: undefined,
  banks: undefined,
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

const onRequest = (suggest) => {
  setState({suggest, error: suggest === ''});
  getBanks(suggest).then((banks) => setState({banks}));
};

const onCancel = () => setState(initialState);

const onChange = (value) => {
  const {title} = getBankByValue(value);
  setState({
    banks: undefined,
    value: value,
    suggest: title,
  });
};

const equals = (a, b) => a.id === b.id;

const getBankByValue = (value) => banks.find(bank => equals(bank.value, value));

<Block>
  <BlockContent>
    <Box>
      <SuggestField
        value={state.value}
        items={state.banks}
        title="Поле ввода"
        suggest={state.suggest}
        loading={state.loading}
        error={state.error}
        equals={equals}
        onCancel={onCancel}
        onChange={onChange}
        onRequest={onRequest}
        total="[Показать все](#)"
        empty={state.error ? "Ошибка. Попробуйте еще раз" : "Ничего не нашлось"}
      />
    </Box>
  </BlockContent>
</Block>
```

## ReactElement в empty и total

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
    suggest: 'ф',
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
  loading: false,
  error: false,
  timer: undefined,
  banks: undefined,
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

const onRequest = (suggest) => {
  setState({suggest, error: suggest === ''});
  getBanks(suggest).then((banks) => setState({banks}));
};

const onCancel = () => setState(initialState);

const onChange = (value) => {
  const {title} = getBankByValue(value);
  setState({
    banks: undefined,
    value: value,
    suggest: title,
  });
};

const equals = (a, b) => a.id === b.id;

const getBankByValue = (value) => banks.find(bank => equals(bank.value, value));

<Block>
  <BlockContent>
    <Box>
      <SuggestField
        value={state.value}
        items={state.banks}
        title="Поле ввода"
        suggest={state.suggest}
        loading={state.loading}
        error={state.error}
        equals={equals}
        onCancel={onCancel}
        onChange={onChange}
        onRequest={onRequest}
        total="[Показать все](#)"
        total={<Link href="#" children="Показать все"/>}
        empty={state.error ? (
          <Paragraph children="Ошибка. Попробуйте еще раз"/>
        ) : (
          <React.Fragment>
            <Box mb={4}>
              <Heading size="4">
                Ничего не нашлось
              </Heading>
            </Box>
            <List
              type="bullet"
              children={[
                <Paragraph>Если у вас есть квитанция с реквизитами, <Link href="#">оплатите по ним.</Link></Paragraph>,
                <Paragraph><Link href="#">Напишите нам</Link>. Если услуги нет в кошельке, мы постараемся ее добавить.</Paragraph>,
                <Paragraph>Уточните у поставщика услуги, можно ли ее оплачивать через QIWI.</Paragraph>,
                <Paragraph>Провайдер был, а теперь его нет? Возможно, у него изменилось название или мы перестали с ним сотрудничать.<br/>Перейдите на сайт провайдера и оплатите услугу с помощью <Link href="#">виртуальной или пластиковой карты QIWI</Link>,<br/>баланс карт равен балансу кошелька.</Paragraph>,
              ]}
            />
          </React.Fragment>
        )}
      />
    </Box>
  </BlockContent>
</Block>
```
