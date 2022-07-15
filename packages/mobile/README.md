# @qiwi/pijma-mobile

Pijma mobile UI components.

## Demo
* [@qiwi/pijma-mobile](https://qiwi.github.io/pijma/mobile)

## Install
```bash
npm i --save @qiwi/pijma-mobile
yarn add @qiwi/pijma-mobile
```

## Usage
```javascript
import React from 'react'
import {cache, themes, fonts, reset, CacheProvider, ThemeProvider, Global, Button, TextField} from '@qiwi/pijma-mobile'

export const App: React.FC = () => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={themes.orange}>
      <Global styles={[reset, fonts]}/>
      <Button type="submit" kind="brand" size="accent" text="Button"/>
      <TextField type="tel" name="phone" placeholder="+7 (987) 564-32-10"/>
      <TextField name="phone" mask={['(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}/>
    </ThemeProvider>
  </CacheProvider>
)
```

## License
[MIT](../../LICENSE)
