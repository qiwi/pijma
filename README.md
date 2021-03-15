
<p align="center">
  <a href="https://qiwi.github.io/pijma/desktop">
    <img alt="QIWI Pijma" src="https://github.com/qiwi/pijma/blob/docs/img/pijma.png?raw=true" width="450">
  </a>
</p>

Yet another user interface components library. Weird. Slow. Our own.

## Demo
* [@qiwi/pijma-desktop](https://qiwi.github.io/pijma/desktop)
* [@qiwi/pijma-mobile](https://qiwi.github.io/pijma/mobile)

## Usage
```shell
yarn add @qiwi/pijma-core @qiwi/pijma-desktop
```
```typescript
import React from 'react'
import {
  cache,
  CacheProvider,
  ThemeProvider,
  Global,
  themes,
  fonts,
  reset,
} from '@qiwi/pijma-core'

import { Button } from '@qiwi/pijma-desktop'

const App: React.FC = () => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={themes.orange}>
        <Global styles={[reset, fonts]}/>
        <Button type='submit' kind='brand' size='accent' text='Button'/>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
```

## Development
|  | Cmd |
|---|---|
| **Install** | `yarn i && yarn bootstrap` |
| **Preview** | `yarn watch` |
| **Build** | `yarn build` |
| **Test** | `yarn test` |

###### Environments
* production
* development (default)

```
NODE_ENV=production yarn build
```
