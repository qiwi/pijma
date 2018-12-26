import React, {FC} from 'react'

import IconProps from './IconProps'

const WeakIcon: FC<IconProps> = (props) => {
  const componentName = ('-' + props.name).replace(/-([a-z])/g, m => m[1].toUpperCase()) + 'Icon'
  const RenderedIcon: FC = require('@qiwi/pijma-media')[componentName]
  return (
    <RenderedIcon/>
  )
}

export default WeakIcon
