Данный компонент используется только с **короткими** заголовками и текстами

## Not dotted line

```jsx
<Block>
  <BlockContent>
    <Details
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

## Size "s"

```jsx
<Block>
  <BlockContent>
    <Details
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

## Size "m"

```jsx
<Block>
  <BlockContent>
    <Details
      size="m"
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
    <Details size="s" dots children={[]} stub />
  </BlockContent>
</Block>
```
