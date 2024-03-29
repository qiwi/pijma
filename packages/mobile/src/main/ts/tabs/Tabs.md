## Horizontal

```jsx
const [select, setSelect] = React.useState(0)
return (
  <Tabs
    select={select}
    onChange={setSelect}
    items={[
      {
        title: 'Первый таб',
        icon: 'star',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                То, насколько легко обнаружить планету по колебаням светимости
                ее звезды во время прохождения планеты между звездой и
                наблюдателем, зависит от размера планеты и от того, насколько ее
                орбита удалена от звезды. Наша Земля находится довольно близко к
                Солнцу, поэтому из других планетных систем ее разглядеть проще.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
      {
        title: 'Второй таб',
        icon: 'star',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                Каждое основание на одной из цепей связывается с одним
                определённым основанием на второй цепи. Такое специфическое
                связывание называется комплементарным. Пурины комплементарны
                пиримидинам (то есть способны к образованию водородных связей с
                ними): аденин образует связи только с тимином, а цитозин — с
                гуанином. В двойной спирали цепочки также связаны с помощью
                гидрофобных взаимодействий и стэкинга, которые не зависят от
                последовательности оснований ДНК.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
      {
        title: 'Третий таб с длинным названием',
        icon: 'star',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                Комплементарность двойной спирали означает, что информация,
                содержащаяся в одной цепи, содержится и в другой цепи.
                Обратимость и специфичность взаимодействий между
                комплементарными парами оснований важна для репликации ДНК и
                всех остальных функций ДНК в живых организмах.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
    ]}
  />
)
```

## Centered

```jsx
const [select, setSelect] = React.useState(0)
return (
  <Tabs
    select={select}
    centered
    onChange={setSelect}
    items={[
      {
        title: 'Счет кошелька',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                То, насколько легко обнаружить планету по колебаням светимости
                ее звезды во время прохождения планеты между звездой и
                наблюдателем, зависит от размера планеты и от того, насколько ее
                орбита удалена от звезды. Наша Земля находится довольно близко к
                Солнцу, поэтому из других планетных систем ее разглядеть проще.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
      {
        title: 'Банковская карта',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                Каждое основание на одной из цепей связывается с одним
                определённым основанием на второй цепи. Такое специфическое
                связывание называется комплементарным. Пурины комплементарны
                пиримидинам (то есть способны к образованию водородных связей с
                ними): аденин образует связи только с тимином, а цитозин — с
                гуанином. В двойной спирали цепочки также связаны с помощью
                гидрофобных взаимодействий и стэкинга, которые не зависят от
                последовательности оснований ДНК.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
      {
        title: 'Счет мобильного',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                Комплементарность двойной спирали означает, что информация,
                содержащаяся в одной цепи, содержится и в другой цепи.
                Обратимость и специфичность взаимодействий между
                комплементарными парами оснований важна для репликации ДНК и
                всех остальных функций ДНК в живых организмах.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
    ]}
  />
)
```

### Stub

```jsx
<Tabs stub items={[]} />
```

## Vertical

```jsx
const [select, setSelect] = React.useState(0)
return (
  <Tabs
    select={select}
    vertical
    onChange={setSelect}
    items={[
      {
        title: 'Счет кошелька',
        icon: 'wallet',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                То, насколько легко обнаружить планету по колебаням светимости
                ее звезды во время прохождения планеты между звездой и
                наблюдателем, зависит от размера планеты и от того, насколько ее
                орбита удалена от звезды. Наша Земля находится довольно близко к
                Солнцу, поэтому из других планетных систем ее разглядеть проще.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
      {
        title: 'Банковская карта',
        icon: 'card',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                Каждое основание на одной из цепей связывается с одним
                определённым основанием на второй цепи. Такое специфическое
                связывание называется комплементарным. Пурины комплементарны
                пиримидинам (то есть способны к образованию водородных связей с
                ними): аденин образует связи только с тимином, а цитозин — с
                гуанином. В двойной спирали цепочки также связаны с помощью
                гидрофобных взаимодействий и стэкинга, которые не зависят от
                последовательности оснований ДНК.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
      {
        title: 'Счет мобильного',
        icon: 'mobile',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                Комплементарность двойной спирали означает, что информация,
                содержащаяся в одной цепи, содержится и в другой цепи.
                Обратимость и специфичность взаимодействий между
                комплементарными парами оснований важна для репликации ДНК и
                всех остальных функций ДНК в живых организмах.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
    ]}
  />
)
```

### Centered

```jsx
const [select, setSelect] = React.useState(0)
return (
  <Tabs
    select={select}
    vertical
    centered
    onChange={setSelect}
    items={[
      {
        title: 'Счет кошелька',
        icon: 'wallet',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                То, насколько легко обнаружить планету по колебаням светимости
                ее звезды во время прохождения планеты между звездой и
                наблюдателем, зависит от размера планеты и от того, насколько ее
                орбита удалена от звезды. Наша Земля находится довольно близко к
                Солнцу, поэтому из других планетных систем ее разглядеть проще.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
      {
        title: 'Банковская карта',
        icon: 'card',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                Каждое основание на одной из цепей связывается с одним
                определённым основанием на второй цепи. Такое специфическое
                связывание называется комплементарным. Пурины комплементарны
                пиримидинам (то есть способны к образованию водородных связей с
                ними): аденин образует связи только с тимином, а цитозин — с
                гуанином. В двойной спирали цепочки также связаны с помощью
                гидрофобных взаимодействий и стэкинга, которые не зависят от
                последовательности оснований ДНК.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
      {
        title: 'Счет мобильного',
        icon: 'mobile',
        content: (
          <Block>
            <BlockContent indent="m">
              <Paragraph size="m">
                Комплементарность двойной спирали означает, что информация,
                содержащаяся в одной цепи, содержится и в другой цепи.
                Обратимость и специфичность взаимодействий между
                комплементарными парами оснований важна для репликации ДНК и
                всех остальных функций ДНК в живых организмах.
              </Paragraph>
            </BlockContent>
          </Block>
        ),
      },
    ]}
  />
)
```

### Stub

```jsx
<Tabs stub centered vertical items={[]} />
```
