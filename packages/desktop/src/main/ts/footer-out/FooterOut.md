```jsx
<FooterOut
  data-testid="footer-out"
  children={[
    { href: '//vk.com/qiwirussia', target: '_blank', icon: 'vk' },
    { href: '//ok.ru/qiwirussia', target: '_blank', icon: 'ok' },
    {
      href: '//youtube.com/user/QiwiRussia',
      target: '_blank',
      icon: 'youtube',
    },
    { href: '//twitter.com/qiwirussia', target: '_blank', icon: 'twitter' },
    { href: '//facebook.com/QiwiRussia', target: '_blank', icon: 'facebook' },
    {
      href: '//instagram.com/qiwi_russia',
      target: '_blank',
      icon: 'instagram',
    },
  ]}
/>
```

```jsx
<FooterOut data-testid="no" children={[]} stub />
```

```jsx
<FooterOut data-testid="no" stub={3} children={[]} />
```
