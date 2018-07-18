import React from 'react'

import RadioProps from './RadioProps'
import RadioMain from './RadioMain'
import RadioBack from './RadioBack'
import RadioLine from './RadioLine'
import RadioMark from './RadioMark'

const Radio: React.SFC<RadioProps> = (props) => (
  <RadioMain {...props}>
    <RadioBack {...props}/>
    <RadioLine {...props}/>
    <RadioMark {...props}/>
  </RadioMain>
)

export default Radio
