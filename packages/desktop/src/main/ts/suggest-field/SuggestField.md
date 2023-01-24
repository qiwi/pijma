#### SuggestField

```jsx {"id":"1","actions":[{"action":"focus","selector":"input"},{"action":"keyPress","selector":"input","key":"a"},{"action":"none","key":"result","wait":1000,"preview":"[role=listbox]"},{"action":"hover","selector":"[role=listbox] [role=option]","preview":"[role=listbox]"},{"action":"click","selector":"[role=listbox] [role=option]"}]}
const bankList = [
  {
    value: {
      id: 1,
    },
    title: 'Сбербанк',
    logo: 'https://static.qiwi.com/img/pijma/sber.png',
    description: 'ПАО «Сбербанк России»',
  },
  {
    value: {
      id: 2,
    },
    title: 'Альфа-Банк',
    suggest: 'ф',
    logo: 'https://static.qiwi.com/img/pijma/alpha.png',
    description: 'АО «Альфа-Банк»',
  },
  {
    value: {
      id: 3,
    },
    title: 'Банк «Открытие»',
    logo: 'https://static.qiwi.com/img/pijma/open.png',
    description: 'ПАО Банк «ФК Открытие»',
  },
  {
    value: {
      id: 4,
    },
    title: 'Банк ВТБ',
    logo: 'https://static.qiwi.com/img/pijma/vtb.png',
    description: 'Банк ВТБ (ПАО)',
  },
  {
    value: {
      id: 5,
    },
    title: 'МДМ Банк',
    logo: 'https://static.qiwi.com/img/pijma/mdm.png',
    description: 'ПАО «МДМ Банк»',
  },
  {
    value: {
      id: 6,
    },
    title: 'DeltaCredit Банк',
    logo: 'https://static.qiwi.com/img/pijma/delta.png',
    description: 'АО КБ ДЕЛЬТАКРЕДИТ',
  },
  {
    value: {
      id: 7,
    },
    title: 'ОТП Банк',
    logo: 'https://static.qiwi.com/img/pijma/otp.png',
    description: 'АО «ОТП-Банк»',
  },
  {
    value: {
      id: 8,
    },
    title: 'Почта Банк',
    logo: 'https://static.qiwi.com/img/pijma/pb.png',
    description: 'ПАО «Почта Банк»',
  },
  {
    value: {
      id: 9,
    },
    title: 'Промсвязьбанк',
    logo: 'https://static.qiwi.com/img/pijma/psb.png',
    description: 'ПАО «ПРОМСВЯЗЬБАНК»',
  },
  {
    value: {
      id: 10,
    },
    title: 'Райффайзенбанк',
    logo: 'https://static.qiwi.com/img/pijma/rai.png',
    description: 'АО «Райффайзенбанк»',
  },
  {
    value: {
      id: 11,
    },
    title: 'Ренессанс Кредит Банк',
    logo: 'https://static.qiwi.com/img/pijma/rkb.png',
    description: 'КБ "Ренессанс Кредит" (ООО)',
  },
  {
    value: {
      id: 12,
    },
    title: 'РокетБанк',
    logo: 'https://static.qiwi.com/img/pijma/roket.png',
    description: 'ФИЛИАЛ РОКЕТБАНК КИВИ БАНК (АКЦИОНЕРНОЕ ОБЩЕСТВО)',
  },
  {
    value: {
      id: 13,
    },
    title: 'Совкомбанк',
    logo: 'https://static.qiwi.com/img/pijma/sov.png',
    description: 'Публичное акционерное общество «Совкомбанк»',
  },
  {
    value: {
      id: 14,
    },
    title: 'Русский Стандарт',
    description: 'АО «Банк Русский Стандарт»',
  },
]

const [loading, setLoading] = React.useState(false)
const [validateError, setValidateError] = React.useState(undefined)
const [suggestError, setSuggestError] = React.useState(undefined)
const [suggest, setSuggest] = React.useState(undefined)
const [timer, setTimer] = React.useState(undefined)
const [banks, setBanks] = React.useState(undefined)
const [value, setValue] = React.useState(undefined)

const filterBanks = (title) =>
  bankList.filter((bank) => {
    return (
      title !== '' &&
      bank.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
    )
  })

const getBanks = (suggest) => {
  setLoading(true)
  clearTimeout(timer)
  return new Promise((resolve, reject) => {
    setTimer(
      setTimeout(() => {
        setLoading(false)
        resolve(filterBanks(suggest))
      }, 1000),
    )
  })
}

const onRequest = (suggest) => {
  setSuggest(suggest)
  getBanks(suggest).then((banks) => {
    setBanks(banks)
    setSuggestError(banks.length === 0 && suggest !== '')
    setValidateError(suggest === '' ? 'Введите значение' : undefined)
  })
}

const onCancel = () => {
  setLoading(false)
  setValidateError(undefined)
  setSuggestError(undefined)
  setTimer(undefined)
  setBanks(undefined)
}

const onChange = (value) => {
  const { title } = getBankByValue(value)
  setBanks(undefined)
  setValue(value)
  setSuggest(title)
}

const equals = (a, b) => a.id === b.id

const getBankByValue = (value) =>
  bankList.find((bank) => equals(bank.value, value))

return (
  <Block>
    <BlockContent>
      <Box width={70}>
        <SuggestField
          data-testid="suggest-field"
          value={value}
          items={banks}
          title="Поле ввода"
          suggest={suggest}
          loading={loading}
          error={validateError}
          equals={equals}
          onCancel={onCancel}
          onChange={onChange}
          onRequest={onRequest}
          empty={
            suggestError
              ? {
                  text: 'Ошибка,',
                  link: {
                    text: 'попробуйте ещё раз',
                    suggest: suggest,
                  },
                }
              : undefined
          }
        />
      </Box>
    </BlockContent>
  </Block>
)
```
