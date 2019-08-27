## Small

```jsx
<Block>
  <BlockContent>
    <Markdown size="s">{`
Small Paragraph

[small link](https://qiwi.com)
      
    `}</Markdown>
  </BlockContent>
</Block>
```

## Medium

```jsx
<Block>
  <BlockContent>
    <Markdown size="m">{`
Medium Paragraph

[medium link](https://qiwi.com)

Medium Paragraph 

[medium link](https://qiwi.com)
      
    `}</Markdown>
  </BlockContent>
</Block>
```

## Large

```jsx
<Block>
  <BlockContent>
    <Markdown size="l">{`

Large Paragraph

[large link](https://qiwi.com)
      
    `}</Markdown>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Markdown size="m">{`
# Markdown

## Пример с использованием всех сущностей

Абзацы создаются при помощи пустой строки. Если вокруг текста сверху и снизу есть пустые строки, то текст превращается в абзац.

Чтобы сделать перенос строки вместо абзаца,  
нужно поставить два пробела в конце предыдущей строки.

Заголовки отмечаются диезом в начале строки, от одного до шести. Например:

# Заголовок первого уровня
## Заголовок h2
### Заголовок h3
#### Заголовок h4

В декоративных целях заголовки можно «закрывать» с обратной стороны.

### Списки

- элемент 1
- элемент 2
- элемент 3

Вложенные пункты создаются четырьмя пробелами перед маркером пункта:

- элемент 1
- элемент 2
   - вложенный элемент 2.1
   - вложенный элемент 2.2
- элемент

Упорядоченный список:

1. элемент 1
2. элемент 2
  1. вложенный
  2. вложенный
3. элемент 3
4. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.

На самом деле не важно как в коде пронумерованы пункты, главное, чтобы перед элементом списка стояла цифра (любая) с точкой. Можно сделать и так:

0. элемент 1
0. элемент 2
0. элемент 3
0. элемент 4

Текст текст **bold** text

**bold text**

*italic text*

***bold and italic***

~~Зачеркнутый текст~~
    `}</Markdown>
  </BlockContent>
</Block>
```
