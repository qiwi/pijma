Компонент используется для замены `\n` (`\r` `\r\n`) на тег br в переданной строке. 
Он уже применяется внутри остальных текстовых компонентов
```jsx
  <Typo
      as="p"
      display="block"
      size="4"
      height="6"
      weight="300"
      color="#000"
    >
    <Breaker>{'Пример строки \n с переносом'}</Breaker>
  </Typo>
```
```jsx
  <Typo
      as="p"
      display="block"
      size="4"
      height="6"
      weight="300"
      color="#000"
    >
    <Breaker children={'Пример children \n с переносом'}/>
  </Typo>
```
```jsx
  <Typo
      as="p"
      display="block"
      size="4"
      height="6"
      weight="300"
      color="#000"
    >
    <Breaker children={'Еще можно использовать \\r \r или так \\r\\n \r\n например'}/>
  </Typo>
```
```jsx
  <Typo
      as="p"
      display="block"
      size="4"
      height="6"
      weight="300"
      color="#000"
      children={'Пример строки c \\n \n без Breaker'}
    />
```

```jsx
  <Typo
      as="p"
      display="block"
      size="4"
      height="6"
      weight="300"
      color="#000"
    >
    <Breaker>Пример вложенного компонента c \n - так не сработает</Breaker>
  </Typo>
```
