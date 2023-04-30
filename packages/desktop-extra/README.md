# @qiwi/pijma-desktop-extra

Pijma desktop extra UI components.

## Install

```bash
npm i --save @qiwi/pijma-desktop-extra
yarn add @qiwi/pijma-desktop-extra
```

## Usage

```javascript
import React from 'react'

import { Table } from '@qiwi/pijma-desktop-extra'

import {
  cache,
  CacheProvider,
  fonts,
  Global,
  reset,
  ThemeProvider,
  themes,
} from '../../ts'

export const App = () => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={themes.orange}>
      <Global styles={[reset, fonts]} />
      <Table columns={columns} data={data} onSelect={onSelect} />
    </ThemeProvider>
  </CacheProvider>
)
```

## License

[MIT](../../LICENSE)
