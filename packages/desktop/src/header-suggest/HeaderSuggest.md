#### HeaderSuggest

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
  suggest: '',
  loading: false,
  banks: [],
  timer: undefined,
  error: false,
};

const target = React.useRef()
const container = React.useRef()
const currentTarget = target.current

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
    value: value,
    suggest: title,
  });
  console.log('SELECT ITEM', value);
};

const onSubmit = (suggest) => {
  console.log('SUBMIT', suggest)
};

const equals = (a, b) => a.id === b.id;

const getBankByValue = (value) => banks.find(bank => equals(bank.value, value));

<Pos
  ref={container}
  type="relative"
  transform="scale(0.7)" 
  transformOrigin="left" 
  width={300}
>
  <Header>
    <Flex height={1} justify="space-between" ref={target}>
      <FlexItem ml={6}>
        <Flex height={1}>
          <FlexItem align="center" shrink={0} mr={11}>
            <Lnk href={window.location.href}>
              <Box
                as="img"
                src="https://static.qiwi.com/img/qiwi_com/header/qiwi-wallet-logo.svg"
                width={24}
                height={12}
              />
            </Lnk>
          </FlexItem>
          <FlexItem shrink={0} mr={6}>
            <HeaderMenu
              children={[
                {href: `${location.href}?menu=1`, title: 'Платежи', active: true},
                {href: `${location.href}?menu=2`, title: 'Переводы'},
              ]}
            />
          </FlexItem>
          <FlexItem align="center" shrink={0} cursor="pointer">
            <HeaderSuggest
              value={state.value}
              items={state.banks}
              suggest={state.suggest}
              loading={state.loading}
              error={state.error}
              equals={equals}
              target={target}
              container={container}
              onCancel={onCancel}
              onSubmit={onSubmit}
              onChange={onChange}
              onRequest={onRequest}
              total={{
                link: {
                  text: 'Показать все',
                  suggest: state.suggest,
                }
              }}
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
          </FlexItem>
        </Flex>
      </FlexItem>
      <FlexItem align="center" shrink={0} ml={11} mr={6}>
        <Actions size="minor">
          <Button
            kind="simple"
            size="minor"
            text="Создать кошелек"
          />
          <Button
            kind="brand"
            size="minor"
            text="Войти"
          />
        </Actions>
      </FlexItem>
    </Flex>
  </Header>
</Pos>
```
