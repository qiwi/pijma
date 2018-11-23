import React from 'react'

import IconProps from './IconProps'

const WeakIcon: React.FunctionComponent<IconProps> = (props) => {
  const componentName = ('-' + props.name).replace(/-([a-z])/g, m => m[1].toUpperCase()) + 'Icon';

  const RenderedIcon: React.FunctionComponent = require('@qiwi/pijma-media')[componentName]

  return (<RenderedIcon/>)
}

export default WeakIcon
