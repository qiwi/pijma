### Image with square stub

```jsx
<Block>
  <BlockContent>
    <Spacer size="xxl">
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_1.gif"
        width={75}
        height={52}
      />
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_2.gif"
        width={75}
        height={52}
      />
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_3.gif"
        width={75}
        height={52}
      />
    </Spacer>
  </BlockContent>
</Block>
```

### Image with circle stub (Same sizes)

```jsx
<Block>
  <BlockContent>
    <Spacer size="xxl">
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_11.gif"
        width={75}
        height={75}
      />
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_12.gif"
        width={75}
        height={75}
      />
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_13.gif"
        width={75}
        height={75}
      />
    </Spacer>
  </BlockContent>
</Block>
```

### Image with custom stub

```jsx
<Block>
  <BlockContent>
    <Spacer size="xxl">
      <Image
        data-testid="no"
        src="https://static.qiwi.com/img/pijma/cat_21.gif"
        width={75}
        height={75}
        stub={<Stub width={75} height={75} r={52} />}
      />
      <Image
        data-testid="no"
        src="https://static.qiwi.com/img/pijma/cat_22.gif"
        width={75}
        height={75}
        stub={<Stub width={75} height={75} r={52} />}
      />
      <Image
        data-testid="no"
        src="https://static.qiwi.com/img/pijma/cat_23.gif"
        width={75}
        height={75}
        stub={<Stub width={75} height={75} r={52} />}
      />
    </Spacer>
  </BlockContent>
</Block>
```

### Image with dataImage stub

```jsx {"wait":100}
const dataImage =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAAAAAA7VNdtAAAACXBIWXMAAC4jAAAuIwF4pT92AAACJUlEQVRIx2P4TzJgGPJaXpKs5at4H4ladgfJMXSQpGWH6O6X/exNpGjxAKnezFhDgha3MhDpxNZIvJaZfNeBpM8sthNEaXkxa/f/v15iaz4tkPkVVEiMlmviupwBX37msTFIHvvv2UiMltBJ/x/q23z6//Har/9LRZ/j11J99f//Tzmmf///f2ts8eH//28JUmfxe/9vYvP//+9MGEAe/2Bh+vv//y1v8Qfy6////lefAyrWfwfkfVpHOFkeFjz1/182kPhkY/CayJRcynfs//9C/mP/vzjovCQy8VfzHPr/v5z30P9vrtOJ0vJvigc3197//2u59/3/Q5zDqoyv3E7h3Pn/f3MwkbnyH88eIFnBvuU/uh24beFaDyT+SLHvIj7vx+p+AZIWc14TqeUHMP0qmF37v06VyBJmtRSjx+P/j+0ZBESOE6dlq8Sme6YyN///v7LnE3Hl2DeZQ/9XqQRIXCW+6HtR/P+0zN2vgqKXSCkt7Zf+/2+TcZI4Lf9uglKg1Kb/D2T/EOewS+oMjEFv/jcIJEnNJq4Yfy8x+fthHc13/xdm7SKy5J9lAsqz6ukkVBb96iByuSAJWm6xgHywV4wYLdPeQzidLO1f3thVE6HltbQxpLj5P42XlSn1NzG23JHThybyz8cfEllX3leElCKTkoivXh8pazz7/38G/0kSauSn6qqP5/IdJakSf64lyXuQxHr/lflekpsK/0ZMswcBAGgRHseWkpurAAAAAElFTkSuQmCC'
return (
  <Block>
    <BlockContent>
      <Spacer size="xxl">
        <Image
          data-testid="no"
          src="https://static.qiwi.com/img/pijma/cat_31.gif"
          width={75}
          height={75}
          stub={dataImage}
        />
        <Image
          data-testid="no"
          src="https://static.qiwi.com/img/pijma/cat_32.gif"
          width={75}
          height={75}
          stub={dataImage}
        />
        <Image
          data-testid="no"
          src="https://static.qiwi.com/img/pijma/cat_33.gif"
          width={75}
          height={75}
          stub={dataImage}
        />
      </Spacer>
    </BlockContent>
  </Block>
)
```

### Horizontal lazy loading

```jsx
<Block>
  <BlockContent>
    <Card width={1} overflow="auto">
      <Pos type="relative">
        <Flex>
          <FlexItem shrink={0} mr={5}>
            <Image
              data-testid="image"
              src="https://static.qiwi.com/img/pijma/cat_41.gif"
              width={75}
              height={75}
            />
          </FlexItem>
          <FlexItem shrink={0} ml={5} mr={5}>
            <Image
              data-testid="image"
              src="https://static.qiwi.com/img/pijma/cat_42.gif"
              width={75}
              height={75}
            />
          </FlexItem>
          <FlexItem shrink={0} ml={5} mr={5}>
            <Image
              data-testid="image"
              src="https://static.qiwi.com/img/pijma/cat_43.gif"
              width={75}
              height={75}
            />
          </FlexItem>
          <FlexItem shrink={0} ml={5} mr={5}>
            <Image
              data-testid="image"
              src="https://static.qiwi.com/img/pijma/cat_44.gif"
              width={75}
              height={75}
            />
          </FlexItem>
          <FlexItem shrink={0} ml={5} mr={5}>
            <Image
              data-testid="image"
              src="https://static.qiwi.com/img/pijma/cat_45.gif"
              width={75}
              height={75}
            />
          </FlexItem>
          <FlexItem shrink={0} ml={5} mr={5}>
            <Image
              data-testid="image"
              src="https://static.qiwi.com/img/pijma/cat_46.gif"
              width={75}
              height={75}
            />
          </FlexItem>
          <FlexItem shrink={0} ml={5}>
            <Image
              data-testid="image"
              src="https://static.qiwi.com/img/pijma/cat_47.gif"
              width={75}
              height={75}
            />
          </FlexItem>
        </Flex>
      </Pos>
    </Card>
  </BlockContent>
</Block>
```

### Image instant loading

```jsx
<Block>
  <BlockContent>
    <Spacer size="xxl">
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_51.gif"
        width={75}
        height={75}
        stub={false}
      />
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_52.gif"
        width={75}
        height={75}
        stub={false}
      />
      <Image
        data-testid="image"
        src="https://static.qiwi.com/img/pijma/cat_53.gif"
        width={75}
        height={75}
        stub={false}
      />
    </Spacer>
  </BlockContent>
</Block>
```
