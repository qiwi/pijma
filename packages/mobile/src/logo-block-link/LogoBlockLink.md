### С описанием

```jsx
<Grid columns={2} layout={1}>
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    description="Примечание"
    icon={<Icon name="passport" size={1}/>}
  />
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    description="Примечание"
    icon={<Icon name="passport" size={1}/>}
  />
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    description="Примечание"
    icon={<Icon name="passport" size={1}/>}
  />
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    description="Примечание"
    icon={<Icon name="passport" size={1}/>}
  />
</Grid>
```

#### С действиями

```jsx
<Grid columns={2} layout={1}>
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    description="Примечание"
    icon={<Icon name="passport" size={1}/>}
    actions={[
      <Button
        kind="simple"
        size="minor"
        icon={<Icon name="dots-h"/>}
      />
    ]}
  />
  <LogoBlockLink
      href="//qiwi.com"
      target="_blank"
      title="Перейти на главную"
      description="Примечание"
      icon={<Icon name="passport" size={1}/>}
      actions={[
        <Button
          kind="simple"
          size="minor"
          icon={<Icon name="dots-h"/>}
        />
      ]}
    />
</Grid>
```

#### Placeholder

```jsx
<Grid columns={2} layout={1}>
  <LogoBlockLink
    icon="required"
    title="required"
    href="required"
    description="if you need description stub put any corrent content here"
    stub
  />
  <LogoBlockLink
    icon="required"
    title="required"
    href="required"
    description="if you need description stub put any corrent content here"
    stub
  />
</Grid>
```

### Без описания

```jsx
<Grid columns={2} layout={[1]}>
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
  />
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
  />
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
  />
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
  />
</Grid>
```

#### С действиями

```jsx
<Grid columns={2} layout={[1]}>
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
    actions={[
      <Button
        kind="simple"
        size="minor"
        icon={<Icon name="dots-h"/>}
      />
    ]}
  />
  <LogoBlockLink
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
    actions={[
      <Button
        kind="simple"
        size="minor"
        icon={<Icon name="dots-h"/>}
      />
    ]}
  />
</Grid>
```

#### Placeholder

```jsx
<Grid columns={2} layout={1}>
  <LogoBlockLink
    icon="required"
    title="required"
    href="required"
    stub
  />
  <LogoBlockLink
    icon="required"
    title="required"
    href="required"
    stub
  />
</Grid>
```

## Horizontal

### С описанием

```jsx
<Grid columns={1} layout={1}>
  <LogoBlockLink
    horizontal
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    description="Примечание"
    icon={<Icon name="passport" size={1}/>}
  />
  <LogoBlockLink
    horizontal
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    description="Примечание"
    icon={<Icon name="passport" size={1}/>}
  />
</Grid>
```

#### С действиями

```jsx
<Grid columns={1} layout={1}>
  <LogoBlockLink
    horizontal
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    description="Примечание"
    icon={<Icon name="passport" size={1}/>}
    actions={[
      <Button
        kind="simple"
        size="minor"
        icon={<Icon name="dots-h"/>}
      />
    ]}
  />
  <LogoBlockLink
      horizontal
      href="//qiwi.com"
      target="_blank"
      title="Перейти на главную"
      description="Примечание"
      icon={<Icon name="passport" size={1}/>}
      actions={[
        <Button
          kind="simple"
          size="minor"
          icon={<Icon name="dots-h"/>}
        />
      ]}
  />
</Grid>
```

#### Placeholder

```jsx
<Grid columns={1} layout={1}>
  <LogoBlockLink
    icon="required"
    title="required"
    href="required"
    horizontal
    description="if you need description stub put any corrent content here"
    stub
  />
  <LogoBlockLink
    icon="required"
    title="required"
    href="required"
    horizontal
    description="if you need description stub put any corrent content here"
    stub
  />
</Grid>
```

### Без описания

```jsx
<Grid columns={1} layout={[1]}>
  <LogoBlockLink
    horizontal
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
  />
  <LogoBlockLink
    horizontal
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
  />
</Grid>
```

#### С действиями

```jsx
<Grid columns={1} layout={[1]}>
  <LogoBlockLink
    horizontal
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
    actions={[
      <Button
        kind="simple"
        size="minor"
        icon={<Icon name="dots-h"/>}
      />
    ]}
  />
  <LogoBlockLink
    horizontal
    href="//qiwi.com"
    target="_blank"
    title="Перейти на главную"
    icon={<Icon name="passport" size={1}/>}
    actions={[
      <Button
        kind="simple"
        size="minor"
        icon={<Icon name="dots-h"/>}
      />
    ]}
  />
</Grid>
```

#### Placeholder

```jsx
<Grid columns={1} layout={1}>
  <LogoBlockLink
    icon="required"
    title="required"
    href="required"
    horizontal
    stub
  />
  <LogoBlockLink
    icon="required"
    title="required"
    href="required"
    horizontal
    stub
  />
</Grid>
```
