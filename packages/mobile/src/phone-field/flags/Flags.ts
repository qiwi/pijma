import {FC} from 'react'

import {CountryCode} from '@qiwi/pijma-core'

type Flags = {
  [code in CountryCode]: FC
}

export default Flags
