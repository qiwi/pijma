```jsx
<Block>
  <BlockContent>
    <Details
      data-testid="details"
      children={[
        { title: 'Title 1', content: 'Text 1' },
        { title: 'Title 2', content: 'Text2' },
        { title: 'Title 3', content: 'Text 3' },
        { title: 'Title 4', content: 'Text 4' },
      ]}
    />
  </BlockContent>
</Block>
```

## Dotted line

```jsx
<Block>
  <BlockContent>
    <Details
      data-testid="details"
      dots
      children={[
        {
          title:
            'Длинный длинный заголовок может располагаться на несколько строк, в конце последней строки ставится разделительная черта',
          content: 'Text 1',
        },
        { title: 'Title 2', content: 'Text 2' },
        {
          title: 'Title 3',
          content:
            'Длинный текст может располагаться на несколько строк, последняя строка находится на одном уровне с разделительной чертой',
        },
        {
          title:
            'Длинный длинный заголовок может располагаться на несколько строк, в конце последней строки ставится разделительная черта',
          content:
            'Длинный текст может располагаться на несколько строк, последняя строка находится на одном уровне с разделительной чертой',
        },
      ]}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Details
      data-testid="details"
      dots
      children={[
        { title: 'Допустимый остаток на балансе:', content: 'До 15 000 ₽' },
        {
          title: 'Платежи и переводы',
          content: [
            'До 40 000 ₽ в месяц',
            'Из них не более 5 000 ₽ на банковские карты, счета и кошельки других систем',
            'Не более 15 000 ₽ на другие QIWI Кошельки',
            'И не более 5 000 ₽ в месяц на платежи иностранным компаниям',
          ],
        },
        { title: 'Допустимая сумма на одну операцию', content: 'До 15 000 ₽' },
        {
          title: 'Снятие наличных с карт QIWI',
          content: ['До 5 000 ₽ в день', 'До 5 000 ₽ в месяц'],
        },
      ]}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Details
      data-testid="details"
      dots
      children={[
        { title: 'Срок действия карты', content: '3 года' },
        { title: 'Пополнение', content: 'бесплатно' },
        { title: 'Обслуживание карты', content: 'бесплатно' },
        {
          title: 'Комиссия при оплате в рублях в российских магазинах',
          content: '0%',
        },
        {
          title: 'Комиссия при оплате в зарубежных магазинах',
          content: '2,5%',
        },
        { title: 'Выдача наличных в любом банкомате', content: '2% + 50 ₽' },
      ]}
    />
  </BlockContent>
</Block>
```

## Width

Рекомендуется указывать один параметр ширины содержимого (либо titleWidth, либо contentWidth)

```jsx
<Block>
  <BlockContent>
    <Details
      data-testid="details"
      titleWidth={75}
      dots
      children={[
        {
          title: 'Допустимый остаток на балансе',
          content: 'До 15 000 ₽',
        },
        {
          title: 'Платежи и переводы',
          content: [
            'До 40 000 ₽ в месяц',
            'Из них не более 5 000 ₽ на банковские карты, счета и кошельки других систем',
            'Не более 15 000 ₽ на другие QIWI Кошельки',
            'И не более 5 000 ₽ в месяц на платежи иностранным компаниям',
          ],
        },
        { title: 'Допустимая сумма на одну операцию', content: 'До 15 000 ₽' },
        {
          title: 'Снятие наличных с карт QIWI',
          content: ['До 5 000 ₽ в день', 'До 5 000 ₽ в месяц'],
        },
      ]}
    />
  </BlockContent>
</Block>
```

## Small

```jsx
<Block>
  <BlockContent>
    <Details
      data-testid="details"
      size="s"
      dots
      children={[
        { title: 'Срок действия карты', content: '3 года' },
        { title: 'Пополнение', content: 'бесплатно' },
        { title: 'Обслуживание карты', content: 'бесплатно' },
        {
          title: 'Комиссия при оплате в рублях в российских магазинах',
          content: '0%',
        },
        {
          title: 'Комиссия при оплате в зарубежных магазинах',
          content: '2,5%',
        },
        { title: 'Выдача наличных в любом банкомате', content: '2% + 50 ₽' },
      ]}
    />
  </BlockContent>
</Block>
```

## Large

```jsx
<Block>
  <BlockContent>
    <Details
      data-testid="details"
      size="l"
      dots
      children={[
        { title: 'Срок действия карты', content: '3 года' },
        { title: 'Пополнение', content: 'бесплатно' },
        { title: 'Обслуживание карты', content: 'бесплатно' },
        {
          title: 'Комиссия при оплате в рублях в российских магазинах',
          content: '0%',
        },
        {
          title: 'Комиссия при оплате в зарубежных магазинах',
          content: '2,5%',
        },
        { title: 'Выдача наличных в любом банкомате', content: '2% + 50 ₽' },
      ]}
    />
  </BlockContent>
</Block>
```

## Stub

```jsx
<Block>
  <BlockContent>
    <Details data-testid="no" size="s" dots children={[]} stub />
  </BlockContent>
</Block>
```
