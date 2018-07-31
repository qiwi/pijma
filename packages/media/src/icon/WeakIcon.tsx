import React from 'react'

interface IconProps {
  name: string
}

const iconMap: { [s: string]: string; } = {
  'eye-closed': 'EyeClosedIcon',
  'eye-opened': 'EyeOpenedIcon',
  'repeat': 'RepeatIcon',
  'star': 'StarIcon',
  'question': 'QuestionIcon'
}

function resolveComponentName(name: string) {
  return iconMap[name] || null
}

const Icon: React.SFC<IconProps> = (props) => {
  const componentName = resolveComponentName(props.name)

  if (componentName === null) {
    return null
  }

  const RenderedIcon: React.SFC = require('@qiwi/pijma-media')[componentName]

  return (<RenderedIcon/>)
}

export default Icon
