Компонент используется для замены `\n`, `\r`, `\r\n` на тег `<br/>` в переданной строке. 

Применяется в типографических компонентах: Caption, Title, Heading, Paragraph, Text
```jsx
<Typo as="p" display="block" size="4" height="6" weight="300" color="#000">
  <Breaker>{'Пример строки \n с переносом'}</Breaker>
</Typo>
```
```jsx
<Typo as="p" display="block" size="4" height="6" weight="300" color="#000">
  {'Пример строки c \\n \n без Breaker'}
</Typo>
```
```jsx
<Typo as="p" display="block" size="4" height="6" weight="300" color="#000">
  <Breaker>{'Еще можно использовать \\r \r или \\r\\n \r\n например'}</Breaker>
</Typo>
```
```jsx
<Typo as="p" display="block" size="4" height="6" weight="300" color="#000">
  <Breaker>Пример вложенного компонента c \n - так не сработает</Breaker>
</Typo>
```
