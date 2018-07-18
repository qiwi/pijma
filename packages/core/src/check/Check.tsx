import React from 'react'

import CheckProps from './CheckProps'
import CheckMain from './CheckMain'
import CheckBack from './CheckBack'
import CheckLine from './CheckLine'
import CheckMark from './CheckMark'

const Check: React.SFC<CheckProps> = (props) => (
  <CheckMain {...props}>
    <CheckBack {...props}/>
    <CheckLine {...props}/>
    <CheckMark {...props}/>
  </CheckMain>
)

export default Check
