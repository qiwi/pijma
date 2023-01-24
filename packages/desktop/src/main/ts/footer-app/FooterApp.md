```jsx
<Spacer>
  <FooterApp
    data-testid="footer-app"
    children={[
      {
        href: '//play.google.com/store/apps/details?id=ru.mw',
        target: '_blank',
        icon: <MobileAppIcon name="google" />,
      },
      {
        href: '//apps.apple.com/ru/app/qiwi-%D0%BA%D0%BE%D1%88%D0%B5%D0%BB%D0%B5%D0%BA-%D0%B2%D1%81%D1%91-%D0%BF%D1%80%D0%BE%D1%89%D0%B5/id350905609',
        target: '_blank',
        icon: <MobileAppIcon name="apple" />,
      },
      {
        href: '//appgallery.huawei.com/#/app/C101130485',
        target: '_blank',
        icon: <MobileAppIcon name="huawei" />,
      },
    ]}
  />
  <FooterApp data-testid="no" stub children={[]} />
</Spacer>
```
