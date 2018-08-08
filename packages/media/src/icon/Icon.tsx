import React from 'react'

import IconName from './IconName'
import IconProps from './IconProps'

import CrossIcon from './CrossIcon'
import DownloadIcon from './DownloadIcon'
import EyeClosedIcon from './EyeClosedIcon'
import EyeOpenedIcon from './EyeOpenedIcon'
import LoginIcon from './LoginIcon'
import LogoutIcon from './LogoutIcon'
import PercentIcon from './PercentIcon'
import QuestionIcon from './QuestionIcon'
import RepeatIcon from './RepeatIcon'
import ShareIcon from './ShareIcon'
import StarIcon from './StarIcon'

const Icons: { [name in IconName]: React.SFC } = {
  cross: CrossIcon,
  download: DownloadIcon,
  'eye-closed': EyeClosedIcon,
  'eye-opened': EyeOpenedIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  percent: PercentIcon,
  question: QuestionIcon,
  repeat: RepeatIcon,
  share: ShareIcon,
  star: StarIcon,
}

const Icon: React.SFC<IconProps> = (props) => {
  const RenderedIcon = Icons[props.name]
  return (
    <RenderedIcon/>
  )
}

export default Icon
