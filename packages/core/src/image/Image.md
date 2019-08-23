### Image with square stub

```jsx
<Block>
  <BlockContent>
    <Spacer size="xxl">
      <Image
        src="https://cataas.com/cat/gif?width=300&height=200&hash=1"
        width={75}
        height={52}
        stub
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=200&hash=2"
        width={75}
        height={52}
        stub
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=200&hash=3"
        width={75}
        height={52}
        stub
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
        src="https://cataas.com/cat/gif?width=300&height=300&hash=4"
        width={75}
        height={75}
        stub
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=5"
        width={75}
        height={75}
        stub
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=6"
        width={75}
        height={75}
        stub
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
        src="https://cataas.com/cat/gif?width=300&height=300&hash=14"
        width={75}
        height={75}
        stub={(<Stub width={75} height={75} r={52}/>)}
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=15"
        width={75}
        height={75}
        stub={(<Stub width={75} height={75} r={52}/>)}
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=16"
        width={75}
        height={75}
        stub={(<Stub width={75} height={75} r={52}/>)}
      />
    </Spacer>
  </BlockContent>
</Block>
```

### Image with dataImage stub

```jsx
dataImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAAAAAA7VNdtAAAACXBIWXMAAC4jAAAuIwF4pT92AAACJUlEQVRIx2P4TzJgGPJaXpKs5at4H4ladgfJMXSQpGWH6O6X/exNpGjxAKnezFhDgha3MhDpxNZIvJaZfNeBpM8sthNEaXkxa/f/v15iaz4tkPkVVEiMlmviupwBX37msTFIHvvv2UiMltBJ/x/q23z6//Har/9LRZ/j11J99f//Tzmmf///f2ts8eH//28JUmfxe/9vYvP//+9MGEAe/2Bh+vv//y1v8Qfy6////lefAyrWfwfkfVpHOFkeFjz1/182kPhkY/CayJRcynfs//9C/mP/vzjovCQy8VfzHPr/v5z30P9vrtOJ0vJvigc3197//2u59/3/Q5zDqoyv3E7h3Pn/f3MwkbnyH88eIFnBvuU/uh24beFaDyT+SLHvIj7vx+p+AZIWc14TqeUHMP0qmF37v06VyBJmtRSjx+P/j+0ZBESOE6dlq8Sme6YyN///v7LnE3Hl2DeZQ/9XqQRIXCW+6HtR/P+0zN2vgqKXSCkt7Zf+/2+TcZI4Lf9uglKg1Kb/D2T/EOewS+oMjEFv/jcIJEnNJq4Yfy8x+fthHc13/xdm7SKy5J9lAsqz6ukkVBb96iByuSAJWm6xgHywV4wYLdPeQzidLO1f3thVE6HltbQxpLj5P42XlSn1NzG23JHThybyz8cfEllX3leElCKTkoivXh8pazz7/38G/0kSauSn6qqP5/IdJakSf64lyXuQxHr/lflekpsK/0ZMswcBAGgRHseWkpurAAAAAElFTkSuQmCC';
<Block>
  <BlockContent>
    <Spacer size="xxl">
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=17"
        width={75}
        height={75}
        stub={dataImage}
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=18"
        width={75}
        height={75}
        stub={dataImage}
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=19"
        width={75}
        height={75}
        stub={dataImage}
      />
    </Spacer>
  </BlockContent>
</Block>
```

### Horizontal lazy loading

```jsx
<Block>
  <BlockContent>
    <Card width={1} overflow="auto">
      <Pos type="relative">
        <Flex>
          <Box mr={5}>
            <Image
              src="https://cataas.com/cat/gif?width=300&height=300&hash=7"
              width={75}
              height={75}
              stub
            />
          </Box>
          <Box ml={5} mr={5}>
            <Image
              src="https://cataas.com/cat/gif?width=300&height=300&hash=8"
              width={75}
              height={75}
              stub
            />
          </Box>
          <Box ml={5} mr={5}>
            <Image
              src="https://cataas.com/cat/gif?width=300&height=300&hash=9"
              width={75}
              height={75}
              stub
            />
          </Box>
          <Box ml={5} mr={5}>
            <Image
              src="https://cataas.com/cat/gif?width=300&height=300&hash=10"
              width={75}
              height={75}
              stub
            />
          </Box>
          <Box ml={5} mr={5}>
            <Image
              src="https://cataas.com/cat/gif?width=300&height=300&hash=11"
              width={75}
              height={75}
              stub
            />
          </Box>
          <Box ml={5} mr={5}>
            <Image
              src="https://cataas.com/cat/gif?width=300&height=300&hash=12"
              width={75}
              height={75}
              stub
            />
          </Box>
          <Box ml={5}>
            <Image
              src="https://cataas.com/cat/gif?width=300&height=300&hash=13"
              width={75}
              height={75}
              stub
            />
          </Box>
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
        src="https://cataas.com/cat/gif?width=300&height=300&hash=20"
        width={75}
        height={75}
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=21"
        width={75}
        height={75}
      />
      <Image
        src="https://cataas.com/cat/gif?width=300&height=300&hash=22"
        width={75}
        height={75}
      />
    </Spacer>
  </BlockContent>
</Block>
```
