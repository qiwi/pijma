```jsx
<Block>
  <BlockContent>
    <Oops 
      logo={<WalletLogo/>}
      title="Мы не нашли страницу, которую вы ищете"
      error="404"
      content={
        <React.Fragment>
          <Paragraph
            align="center"
            bold 
            size="m" 
            children="Если вы уверены, что тут что-то должно быть, позвоните нам по телефону 8 800 707-77-59"
          />
          <Flex justify="center" mt={3}>
            <Link href="/" children="перейти на главную"/>
          </Flex>
        </React.Fragment>
      }
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops
      logo={<WalletLogo/>}
      title="Мы не нашли страницу, которую вы ищете"
      error="404"
      content={
        <React.Fragment>
          <Paragraph
            align="center"
            bold 
            size="m" 
            children="Если вы уверены, что тут что-то должно быть, позвоните нам по телефону 8 800 707-77-59"
          />
          <Flex justify="center" mt={3}>
            <Link href="/" children="перейти на главную"/>
          </Flex>
        </React.Fragment>
    }
      footer={(
        <iframe src="https://qiwi.com/qcms/wallet/games/default/" width="100%" height="200"></iframe>
      )}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops 
      logo={<WalletLogo/>}
      title="У вас отключен JavaScript"
      error="!JS"
      content="Для работы с сайтом необходима поддержка JavaScript"
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops 
      logo={<WalletLogo/>}
      title="Ваш браузер больше не поддерживается"
      error="ОЙ!"
      content={
        <React.Fragment>
          <Box mb={6}>
            <Paragraph align="center" size="m" bold children="Пожалуйста, установите один из современных браузеров:"/>
          </Box>
            <Flex justify="center">
              <FlexItem mr={5}>
                <Link href="https://www.opera.com/ru">
                  <Image
                    width={12}
                    height={12}
                    src={require('./media/opera.png')}
                  />
                </Link>
              </FlexItem>
              <FlexItem mr={5}>
                <Link href="https://www.google.com/intl/ru/chrome/">
                  <Image
                    width={12}
                    height={12}
                    src={require('./media/chrome.png')}
                  />
                </Link>
              </FlexItem>
              <FlexItem mr={5}>
                <Link href="https://www.mozilla.org/ru/firefox/new/">
                  <Image
                    width={12}
                    height={12}
                    src={require('./media/ff.png')}
                  />
                </Link>
              </FlexItem>
              <FlexItem>
                <Link href="https://www.apple.com/ru/safari/">
                  <Image
                    width={12}
                    height={12}
                    src={require('./media/safari.png')}
                  />
                </Link>
              </FlexItem>
            </Flex>
        </React.Fragment>
      }
    />
  </BlockContent>
</Block>
```
