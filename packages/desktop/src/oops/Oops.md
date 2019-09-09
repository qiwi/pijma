```jsx
<Block>
  <BlockContent>
    <Flex justify="center" transform="scale(0.6)">
    <Oops
      logo={<WalletLogo/>}
      title="Мы не нашли страницу, которую вы ищете"
      error="404"
      content={
        <Text bold size="m">
          Если вы уверены, что тут что-то должно быть, позвоните нам по телефону 8 800 707-77-59,
          <Link href="/" children="перейти на главную"/>
        </Text>
      }
    />
    </Flex>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Flex justify="center" transform="scale(0.6)">
    <Oops
      logo={<WalletLogo/>}
      title="Мы не нашли страницу, которую вы ищете"
      error="404"
      content={
        <Text bold size="m">
          Если вы уверены, что тут что-то должно быть, позвоните нам по телефону 8 800 707-77-59,
          <Link href="/" children="перейти на главную"/>
        </Text>
      }
      footer={(
        <iframe src="https://qiwi.com/qcms/wallet/games/default/" width="100%" height="200"></iframe>
      )}
    />
    </Flex>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Flex justify="center" transform="scale(0.6)">
      <Oops 
        logo={<WalletLogo/>}
        title="У вас отключен JavaScript"
        error="!JS"
        content="Для работы с сайтом необходима поддержка JavaScript"
      />
    </Flex>
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Flex justify="center" transform="scale(0.6)">
      <Oops 
        logo={<WalletLogo/>}
        title="Ваш браузер больше не поддерживается"
        error="ОЙ!"
        content={
          <React.Fragment>
            <Box mb={6}>
              <Text size="m" bold children="Пожалуйста, установите современный браузер:"/>
            </Box>
            <Actions size="accent">
              <Link href="https://www.opera.com/ru">
                <Image
                  width={12}
                  height={12}
                  src={require('./media/opera.png')}
                />
              </Link>
              <Link href="https://www.google.com/intl/ru/chrome/">
                <Image
                  width={12}
                  height={12}
                  src={require('./media/chrome.png')}
                />
              </Link>
              <Link href="https://www.mozilla.org/ru/firefox/new/">
                <Image
                  width={12}
                  height={12}
                  src={require('./media/ff.png')}
                />
              </Link>
              <Link href="https://www.apple.com/ru/safari/">
                <Image
                  width={12}
                  height={12}
                  src={require('./media/safari.png')}
                />
              </Link>
            </Actions>
          </React.Fragment>
        }
      />
    </Flex>
  </BlockContent>
</Block>
```
