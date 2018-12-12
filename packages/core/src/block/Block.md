```jsx
  <Card bg="#eee" p={7}>
      <Spacer size="l">
        <Block>
          <Card p={4} bg="#fff" >action block</Card>
        </Block>
        <Flex>
          <Card mr={3} width="50%">
            <Block hover>
              <Card p={4} bg="#fff" >action block hovered</Card>
            </Block>
          </Card>
          <Card width="50%">
            <Block hover accent>
              <Card p={4} bg="#fff">action block hover accented</Card>
            </Block>
          </Card>
        </Flex>
      </Spacer>
  </Card>
```
