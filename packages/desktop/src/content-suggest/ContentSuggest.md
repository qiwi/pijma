#### ContentSuggest

```jsx
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
    logo: 'https://static.qiwi.com/img/pijma/std.png',
    description: 'АО «Банк Русский Стандарт»',
  },
]

const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState(false)
const [timer, setTimer] = React.useState(undefined)
const [dialogText, setDialogText] = React.useState(undefined)
const [banks, setBanks] = React.useState(undefined)
const [suggest, setSuggest] = React.useState('')
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
  setError(suggest === '')
  getBanks(suggest).then((banks) => setBanks(banks))
}

const onCancel = () => {
  setSuggest('')
  setLoading(false)
  setBanks(undefined)
  setTimer(undefined)
  setError(false)
}

const onChange = (value) => {
  const { title } = getBankByValue(value)
  setValue(value)
  setSuggest(title)
  setBanks(undefined)
  setDialogText(`Выбрано`)
}

const onSubmit = (suggest) => {
  if (suggest.length < 1) {
    setError(true)
  } else {
    setDialogText(`Отправлено: ${suggest}`)
  }
  return suggest.length >= 1
}

const hideDialog = () => setDialogText(undefined)

const equals = (a, b) => a.id === b.id

const getBankByValue = (value) =>
  bankList.find((bank) => equals(bank.value, value))

;<Block>
  <BlockContent>
    <Box width={128}>
      <ContentSuggest
        value={value}
        items={bankList}
        suggest={suggest}
        loading={loading}
        error={error}
        equals={equals}
        onCancel={onCancel}
        onSubmit={onSubmit}
        onChange={onChange}
        onRequest={onRequest}
        total={{
          link: {
            text: 'Показать все',
            suggest: suggest,
          },
        }}
        empty={
          error
            ? {
                text: 'Ошибка,',
                link: {
                  text: 'попробуйте ещё раз',
                  suggest: suggest,
                },
              }
            : {
                text: 'Ничего не найдено, попробуйте',
                link: {
                  text: 'Сбербанк',
                  suggest: 'Сбербанк',
                },
              }
        }
      />
    </Box>
    <SimpleModal
      show={dialogText !== undefined}
      onHide={hideDialog}
      size="m"
      closable
      backdropClose
    >
      <Heading size="2">{dialogText}</Heading>
    </SimpleModal>
  </BlockContent>
</Block>
```
