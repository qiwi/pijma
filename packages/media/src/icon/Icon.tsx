import React from 'react'

import IconName from './IconName'
import IconProps from './IconProps'

import EyeClosedIcon from './EyeClosedIcon'
import EyeOpenedIcon from './EyeOpenedIcon'
import StarIcon from './StarIcon'
import RepeatIcon from './RepeatIcon'
import QuestionIcon from './QuestionIcon'

const Icons: { [name in IconName]: React.SFC } = {
  'eye-closed': EyeClosedIcon,
  'eye-opened': EyeOpenedIcon,
  repeat: RepeatIcon,
  star: StarIcon,
  question: QuestionIcon
}

const Icon: React.SFC<IconProps> = (props) => {
  const RenderedIcon = Icons[props.name]
  return (
    <RenderedIcon/>
  )
}

export default Icon
