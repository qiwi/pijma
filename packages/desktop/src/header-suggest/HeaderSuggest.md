```jsx
const types = ['object', 'markdown', 'react'];
let type = types[Math.floor(Math.random() * 3)];
const bankList = [
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

const [suggest, setSuggest] = React.useState('');
const [loading, setLoading] = React.useState(false);
const [banks, setBanks] = React.useState(undefined);
const [timer, setTimer] = React.useState(undefined);
const [error, setError] = React.useState(false);
const [value, setValue] = React.useState(undefined);

const target = React.useRef()
const container = React.useRef()
const currentTarget = target.current

const filterBanks = (title) => bankList.filter(bank => {
  return title !== '' && bank.title.toLowerCase().indexOf(title.toLowerCase()) !== -1;
});

const getBanks = (suggest) => {
  setLoading(true);
  clearTimeout(timer);
  return new Promise((resolve, reject) => {
    setTimer(setTimeout(() => {
      setLoading(true);
      resolve(filterBanks(suggest));
    }, 1000));
  });
};

const onRequest = (suggest) => {
  type = types[Math.floor(Math.random() * 3)];
  { setSuggest(suggest); setError(suggest === '') };
  getBanks(suggest).then((banks) => setBanks(banks));
};

const onCancel = () => {
  setSuggest('');
  setLoading(false);
  setBanks(undefined);
  setTimer(undefined);
  setError(false);
};

const onChange = (value) => {
  const {title} = getBankByValue(value);
  setValue(value,
    suggest);
  console.log('SELECT ITEM', value);
};

const onSubmit = (suggest) => {
  console.log('SUBMIT', suggest)
  if (suggest.length < 1) {
    setError(true,)
  }
  return suggest.length >= 1
};

const equals = (a, b) => a.id === b.id;

const getBankByValue = (value) => bankList.find(bank => equals(bank.value, value));

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
              value={value}
              items={bankList}
              suggest={suggest}
              loading={loading}
              error={error}
              equals={equals}
              target={target}
              container={container}
              onCancel={onCancel}
              onSubmit={onSubmit}
              onChange={onChange}
              onRequest={onRequest}
              total={type === 'object' ? (
                {
                  link: {
                    text: 'Показать все',
                    suggest: suggest,
                  }
                }
              ) : type === 'markdown' ? (
                "[Показать все](#)"
              ) : (
                <Link href="#" children="Показать все"/>
              )}
              empty={type === 'object' ? (
                {
                  text: 'Ничего не найдено, попробуйте',
                  link: {
                    text: 'Сбербанк',
                    suggest: 'Сбербанк',
                  }
                }
              ) : type === 'markdown' ? (
                "Ничего не нашлось"
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
