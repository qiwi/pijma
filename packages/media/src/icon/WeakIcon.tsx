import React from 'react'

import {IconProps} from './Icon'

const Icon: React.SFC<IconProps> = (props) => {
  const componentName = ('-' + props.name).replace(/-([a-z])/g, m => m[1].toUpperCase()) + 'Icon';

  const RenderedIcon: React.SFC = require('@qiwi/pijma-media')[componentName]

  return (<RenderedIcon/>)
}

export default Icon
