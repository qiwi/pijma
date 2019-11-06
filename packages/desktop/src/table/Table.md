Таблица

```jsx
paymentTemp = (data) => [<span>{data[0]} <Typo color="#666" as="span">{data[1]}</Typo></span>, <Typo weight="500">{data[2]}</Typo>, data[3], <span><Typo weight="500" as="span">{data[4]}</Typo> <Typo color="#666" as="span">{data[5]}</Typo></span>, <Typo color="#666" as="span">{data[6]}</Typo>]
titles=[{title: 'Платеж', id: 'payment'}, {title: 'Сумма, ₽', id: 'money', align: 'right'}, {title: 'Точка', id: 'place'}, {title: 'Дата и время', id: 'time'}, {title: 'Номер', id: 'number'}];
data=[];
for(let i = 0; i <= 20; i++) {
  if(i % 2) {
    data.push(paymentTemp(['+7 926 898-98-09', 'Константинопольский К. К.', '100 000, 00', 'Мещанский переулок', '22.08.2019', '20:30', 'AR4101b201209']))
  } else {
    data.push(paymentTemp(['+7 931 555-17-09', 'Васильев А. А.', '1 000 000, 00', 'Никольская слобода', '11.08.2019', '11:00', 'QK3121b3a1583']))
  }
}

<Block>
  <BlockContent indent="m">
    <Table
      titles={titles}
      data={data}
    />
  </BlockContent>
</Block>
```
