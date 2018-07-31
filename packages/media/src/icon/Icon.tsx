import React from 'react'

import EyeClosedIcon from './EyeClosedIcon'
import EyeOpenedIcon from './EyeOpenedIcon'
import StarIcon from './StarIcon'
import RepeatIcon from './RepeatIcon'
import QuestionIcon from './QuestionIcon'

export type IconNames =
  'eye-closed' |
  'eye-opened' |
  'repeat' |
  'star' |
  'question'

export interface IconProps {
  name: IconNames
}

const Icons: { [name in IconNames]: React.SFC } = {
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
