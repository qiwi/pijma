## Размеры и отступы

Максимальная ширина поля ввода — 528px.

Ширину поля можно сократить:
- Когда известно точное количество символов, которые нужно ввести.
- Когда мы знаем ширину содержимого выпадающего списка.

Не рекомендуется располагать поля ввода в интерфейсных блоках, ширина которых превышает 680px.

## Типографика

Для плейсхолдера — [Body L 300 Compact](#/Компоненты/Heading) (серый), для введенных данных — [Body L 300 Compact]() (черный).

Для заголовка и для подсказок — [Body S 300]() Compact, серый или черный, для заголовка в фокусе — оранжевый, для кликабельных элементов — синий, для ошибок — красный.

## Состояния полей

#### Поле ввода номера телефона

```jsx
const countries = [
  {
    name: 'Беларусь',
    code: 'by',
    mask: '+375dddddddddddd',
  },
  {
    name: 'Азербайджан',
    code: 'az',
    mask: '+994dddddddddddd',
  },
  {
    name: 'Индия',
    code: 'in',
    mask: '+91ddddddddddddd',
  },
  {
    name: 'Россия',
    code: 'ru',
    mask: '+7dddddddddd',
  },
  {
    name: 'Казахстан',
    code: 'kz',
    mask: '+77ddddddddddddd',
  },
  {
    name: 'Украина',
    code: 'ua',
    mask: '+380dddddddddddd',
  },
  {
    name: 'Великобритания',
    code: 'gb',
    mask: '+44ddddddddddddd',
  },
  {
    name: 'Грузия',
    code: 'ge',
    mask: '+9955ddddddddddd',
  },
  {
    name: 'Литва',
    code: 'lt',
    mask: '+370dddddddddddd',
  },
  {
    name: 'Таджикистан',
    code: 'tj',
    mask: '+992dddddddddddd',
  },
  {
    name: 'Таиланд',
    code: 'th',
    mask: '+66ddddddddddddd',
  },
  {
    name: 'Узбекистан',
    code: 'uz',
    mask: '+998dddddddddddd',
  },
  {
    name: 'Панама',
    code: 'pa',
    mask: '+507dddddddddddd',
  },
  {
    name: 'Армения',
    code: 'am',
    mask: '+374dddddddddddd',
  },
  {
    name: 'Латвия',
    code: 'lv',
    mask: '+371dddddddddddd',
  },
  {
    name: 'Турция',
    code: 'tr',
    mask: '+90ddddddddddddd',
  },
  {
    name: 'Молдавия',
    code: 'md',
    mask: '+373dddddddddddd',
  },
  {
    name: 'Израиль',
    code: 'il',
    mask: '+972dddddddddddd',
  },
  {
    name: 'Вьетнам',
    code: 'vn',
    mask: '+84ddddddddddddd',
  },
  {
    name: 'Эстония',
    code: 'ee',
    mask: '+372dddddddddddd',
  },
  {
    name: 'Южная Корея',
    code: 'kr',
    mask: '+82ddddddddddddd',
  },
  {
    name: 'Кыргызстан',
    code: 'kg',
    mask: '+996dddddddddddd',
  },
];

const [phone, setPhone] = React.useState(undefined);
const [code, setCode] = React.useState(undefined);

<Block>
  <BlockContent>
    <Box width={64}>
      <PhoneField
        countries={countries}
        value={phone}
        action={code ? `Код страны: ${code}` : undefined}
        onChange={(phone, code) => { setPhone(phone); setCode(code) }}
      />
    </Box>
  </BlockContent>
</Block>
```

#### Плейсхолдер

```jsx
<Block>
  <BlockContent>
    <Box width={64}>
      <PhoneField
        stub
        title="if you need title stub put any corrent content here"
        help="if you need help stub put any corrent content here"
        hint="if you need hint stub put any corrent content here"
        value=""
        onChange={(phone, code) => { setPhone(phone); setCode(code) }}
      />
    </Box>
  </BlockContent>
</Block>
```
