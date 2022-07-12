```jsx
<Block>
  <BlockContent>
    <Oops
      logo={<Image width={25} height={10} src="https://static.qiwi.com/img/pijma/logo.svg" />}
      title="Ошибочка вышла"
      error={
        <Image width={65} height={65} src="https://static.qiwi.com/img/pijma/error.svg" />
      }
      content={
        <Spacer>
          <Paragraph align="center">
            При попытке открыть страницу что-то пошло не так.
          </Paragraph>
          <Paragraph align="center">
            <Link href="/" children="Перейти на главную" />
          </Paragraph>
        </Spacer>
      }
      footer={
        <Paragraph align="center" color="support">
          Уверены, что страница должна быть в&nbsp;строю? Наша техподдержка
          у&nbsp;аппарата, звоните: 8&nbsp;800&nbsp;707&#8209;77&#8209;59
        </Paragraph>
      }
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops
      logo={<Image width={25} height={10} src="https://static.qiwi.com/img/pijma/logo.svg" />}
      title="Пропала из вида!"
      error={<Image width={65} height={65} src="https://static.qiwi.com/img/pijma/404.svg" />}
      content={
        <Spacer>
          <Paragraph align="center">
            Такой страницы на данный момент не существует
          </Paragraph>
          <Paragraph align="center">
            <Link href="/" children="Перейти на главную" />
          </Paragraph>
        </Spacer>
      }
      footer={
        <Paragraph align="center" color="support">
          Уверены, что страница должна быть в&nbsp;строю? Наша техподдержка
          у&nbsp;аппарата, звоните: 8&nbsp;800&nbsp;707&#8209;77&#8209;59
        </Paragraph>
      }
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops
      logo={<Image width={25} height={10} src="https://static.qiwi.com/img/pijma/logo.svg" />}
      title="Эти руки не для Cookie?"
      error={
        <Image width={65} height={65} src="https://static.qiwi.com/img/pijma/cookie.svg" />
      }
      content="Включите Cookie, чтобы продолжить работу на сайте"
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops
      logo={<Image width={25} height={10} src="https://static.qiwi.com/img/pijma/logo.svg" />}
      title="Браузер устарел"
      error={
        <Image width={65} height={65} src="https://static.qiwi.com/img/pijma/jackass.svg" />
      }
      content={`Мы простились со старым Бро.\nОбновите браузер, чтобы попасть на сайт`}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops
      logo={
        <Box width={37} height={7}>
          <WalletLogo />
        </Box>
      }
      title="Мы не нашли страницу, которую вы ищете"
      error="404"
      content={
        <React.Fragment>
          <Paragraph
            align="center"
            children={`Если вы уверены, что тут что-то должно быть, позвоните нам по телефону 8\u00A0800\u00A0707\u8209;77\u8209;59`}
          />
          <Flex justify="center" mt={3}>
            <Link href="/" children="перейти на главную" />
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
      logo={
        <Box width={37} height={7}>
          <WalletLogo />
        </Box>
      }
      title="Мы не нашли страницу, которую вы ищете"
      error="404"
      content={
        <React.Fragment>
          <Paragraph
            align="center"
            children={`Если вы уверены, что тут что-то должно быть, позвоните нам по телефону 8\u00A0800\u00A0707\u8209;77\u8209;59`}
          />
          <Flex justify="center" mt={3}>
            <Link href="/" children="перейти на главную" />
          </Flex>
        </React.Fragment>
      }
      footer={
        <iframe
          src="https://qiwi.com/qcms/wallet/games/default/"
          width="100%"
          height="200"
        ></iframe>
      }
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops
      logo={
        <Box width={37} height={7}>
          <WalletLogo />
        </Box>
      }
      title="У вас отключен JavaScript"
      error="!JS"
      content={`Для работы с\u00A0сайтом необходима поддержка JavaScript`}
    />
  </BlockContent>
</Block>
```

```jsx
<Block>
  <BlockContent>
    <Oops
      logo={
        <Box width={37} height={7}>
          <WalletLogo />
        </Box>
      }
      title="Ваш браузер больше не поддерживается"
      error="ОЙ!"
      content={
        <React.Fragment>
          <Box mb={6}>
            <Paragraph
              align="center"
              children="Пожалуйста, установите один из современных браузеров:"
            />
          </Box>
          <Flex justify="center">
            <FlexItem mr={5}>
              <Link href="https://www.opera.com/ru">
                <Image
                  width={12}
                  height={12}
                  src="https://static.qiwi.com/img/pijma/opera.png"
                />
              </Link>
            </FlexItem>
            <FlexItem mr={5}>
              <Link href="https://www.google.com/intl/ru/chrome/">
                <Image
                  width={12}
                  height={12}
                  src="https://static.qiwi.com/img/pijma/chrome.png"
                />
              </Link>
            </FlexItem>
            <FlexItem mr={5}>
              <Link href="https://www.mozilla.org/ru/firefox/new/">
                <Image width={12} height={12} src="https://static.qiwi.com/img/pijma/ff.png" />
              </Link>
            </FlexItem>
            <FlexItem>
              <Link href="https://www.apple.com/ru/safari/">
                <Image
                  width={12}
                  height={12}
                  src="https://static.qiwi.com/img/pijma/safari.png"
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
