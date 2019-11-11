Таблица

```jsx
columns=[{
  title: 'Платеж',
  id: 'payment',
  cell: (data) => <span>{data[0]} <Typo color="#666" as="span">{data[1]}</Typo></span>
}, {
  title: 'Сумма, ₽',
  id: 'money',
  align: 'right',
  weight: 500
}, {
  title: 'Точка',
  id: 'place'
}, {
  title: 'Дата и время', 
  id: 'time',
  cell: (data) => <span><Typo weight="500" as="span">{data[0]}</Typo> <Typo color="#666" as="span">{data[1]}</Typo></span>
}, {
  title: 'Номер', 
  id: 'number',
  color: '#666'
}];
data=[];
for(let i = 0; i <= 20; i++) {
  if(i % 2) {
    data.push([['+7 926 898-98-09', 'Константинопольский К. К.'], '100 000, 00', 'Мещанский переулок', ['22.08.2019', '20:30'], 'AR4101b201209'])
  } else {
    data.push([['+7 931 555-17-09', 'Васильев А. А.'], '1 000 000, 00', 'Никольская слобода', ['11.08.2019', '11:00'], 'QK3121b3a1583'])
  }
}
options={
  columns,
  data
};

<Table
  options={options}
/>
```

```jsx
columns=[{
  title: 'Платеж',
  id: 'payment',
  cell: (data) => <span>{data[0]} <Typo color="#666" as="span">{data[1]}</Typo></span>
}, {
  title: 'Сумма, ₽',
  id: 'money',
  align: 'right',
  weight: 500
}, {
  title: 'Статус', 
  id: 'status',
  cell: (data) => <Typo color={data === 'Принято'? '#4BBD5C' : '#D0021B'} as="span">{data}</Typo>
}, {
  title: 'Точка',
  id: 'place'
}, {
  title: 'Дата и время', 
  id: 'time',
  cell: (data) => <span><Typo weight="500" as="span">{data[0]}</Typo> <Typo color="#666" as="span">{data[1]}</Typo></span>
}, {
  title: 'Номер', 
  id: 'number',
  color: '#666'
}];
data=[];
for(let i = 0; i <= 20; i++) {
  if(i % 2) {
    data.push([['+7 926 898-98-09', 'Константинопольский К. К.'], '100 000, 00', 'Принято', 'Мещанский переулок', ['22.08.2019', '20:30'], 'AR4101b201209'])
  } else {
    data.push([['+7 931 555-17-09', 'Васильев А. А.'], '1 000 000, 00', 'Отклонён сервисом', 'Никольская слобода', ['11.08.2019', '11:00'], 'QK3121b3a1583'])
  }
}
options={
  columns,
  data
};

<Table
  options={options}
/>
```
