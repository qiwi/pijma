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
import {countries} from '@qiwi/pijma-core';
<Block>
  <BlockContent>
    <Box width={64}>
      <PhoneField
        countries={countries}
        value={state.phoneNumber}
        onChange={phoneNumber => {
          setState({phoneNumber})
        }}
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
      />
    </Box>
  </BlockContent>
</Block>
```
