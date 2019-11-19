Таблица - способ структурирования большого объёма данных для удобства просмотра и сравнения.

```jsx
initialState = {activePage: 1};
columns=[{
  title: 'Платеж',
  id: 'payment',
  group: 1,
  cell: (data) => <span>{data[0]} <Typo color="#666" as="span">{data[1]}</Typo></span>
}, {
  title: 'Сумма, ₽',
  id: 'money',
  group: 1,
  weight: 500
}, {
  title: 'Статус', 
  id: 'status',
  state: (data) => data === 'Принято'? 'success' : 'error'
}, {
  title: 'Точка',
  id: 'place'
}, {
  title: 'Дата и время', 
  id: 'time',
  group: 2,
  cell: (data) => <span><Typo weight="500" as="span">{data[0]}</Typo> <Typo color="#666" as="span">{data[1]}</Typo></span>
}, {
  title: 'Номер', 
  id: 'number',
  group: 2,
  state: 'minor'
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
  header={
    <Flex justify="flex-end">
      Фильтр
      <FlexItem width={6} height={6} ml={1} cursor="pointer" onClick={() => setState({filterIconActive: !state.filterIconActive})}>
        <FilterIcon active={state.filterIconActive}/>
      </FlexItem>
    </Flex>
  }
  footer={
    <Flex justify="center">
      <Pagination
        total={10}
        active={state.activePage}
        onChange={(activePage) => setState({activePage})}
      />
    </Flex>
  }
  options={options}
/>
```

#### Левый столбец всегда выравнивается по левому краю. Правый - по правому.

```jsx
columns=[{
  title: 'Платеж',
  id: 'payment'
}, {
  title: 'Сумма, ₽',
  id: 'money',
  weight: 500
}];
data=[['5580 75** **** 9807', '1 000 000, 00']];

<Table
  options={{
    columns,
    data
  }}
/>
```
