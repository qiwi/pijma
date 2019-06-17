Могут быть двух видов:
— с примечанием;
— без примечания.

В такой карточке обязательно размещается логотип провайдера на цветной круглой подложке, либо иконка из общей библиотеки изображений. Размер изображения — 64×64px.

Карточки используются только в десктопной версии сайта. Для мобильной версии рекомендуем использовать вместо карточек вертикальные и горизонтальные списки с логотипами.

## С примечаниями
Используются в качестве интерактивных блоков, ведущих в другие разделы. Пример использования — страница пополнения QIWI Кошелька.

```jsx
<Card bg="#f5f5f5" p={4}>
  <Grid columns={4} layout={[1]}>
      <LogoBlockLink
        href="//qiwi.com"
        target="_blank"
        title="Название карточки"
        description="Примечание"
        icon={<IconWrapper color="#2150F4"><Icon name="forward"/></IconWrapper>}
      />
      <LogoBlockLink
        href="//qiwi.com"
        target="_blank"
        title="Название карточки"
        description="Примечание"
        icon={<IconWrapper color="#91D124"><Icon name="forward"/></IconWrapper>}
      />
      <LogoBlockLink
        href="//qiwi.com"
        target="_blank"
        title="Название карточки"
        description="Примечание"
        icon={<IconWrapper color="#FF8c00"><Icon name="forward"/></IconWrapper>}
      />
      <LogoBlockLink
        href="//qiwi.com"
        target="_blank"
        title="Название карточки"
        description="Примечание"
        icon={<IconWrapper color="#FE5554"><Icon name="forward"/></IconWrapper>}
      />
  </Grid>
</Card>
```
## Без примечаний
Чаще всего используются в каталоге категорий и провайдеров. Такие карточки имеют фиксированную высоту и размещаются в виде плитки.

```jsx
<Card bg="#f5f5f5" p={4}>
  <Grid columns={4} layout={[1]}>
    <LogoBlockLink
      href="//qiwi.com"
      target="_blank"
      title="Название карточки"
      icon={<IconWrapper color="#2150F4"><Icon name="forward"/></IconWrapper>}
    />
    <LogoBlockLink
      href="//qiwi.com"
      target="_blank"
      title="Название карточки"
      icon={<IconWrapper color="#91D124"><Icon name="forward"/></IconWrapper>}
    />
    <LogoBlockLink
      href="//qiwi.com"
      target="_blank"
      title="Название карточки"
      icon={<IconWrapper color="#FF8c00"><Icon name="forward"/></IconWrapper>}
    />
    <LogoBlockLink
      href="//qiwi.com"
      target="_blank"
      title="Название карточки"
      icon={<IconWrapper color="#FE5554"><Icon name="forward"/></IconWrapper>}
    />
  </Grid>
</Card>
```