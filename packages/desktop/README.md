# @qiwi/pijma-desktop

Pijma desktop UI components.

## Demo
* [@qiwi/pijma-desktop](https://qiwi.github.io/pijma/desktop)

## Install
```bash
npm i --save @qiwi/pijma-desktop
yarn add @qiwi/pijma-desktop
```

## Usage
```javascript
import React from 'react'
import {cache, themes, fonts, reset, CacheProvider, ThemeProvider, Global, Button, TextField} from '@qiwi/pijma-desktop'

export const App = () => (
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
