import React from 'react'

import IconName from './IconName'
import IconProps from './IconProps'

import CalendarIcon from './CalendarIcon'
import ClockIcon from './ClockIcon'
import CrossIcon from './CrossIcon'
import DownloadIcon from './DownloadIcon'
import EyeClosedIcon from './EyeClosedIcon'
import EyeOpenedIcon from './EyeOpenedIcon'
import HamburgerIcon from './HamburgerIcon'
import LoginIcon from './LoginIcon'
import LogoutIcon from './LogoutIcon'
import MastercardIcon from './MastercardIcon'
import MirIcon from './MirIcon'
import PercentIcon from './PercentIcon'
import QuestionIcon from './QuestionIcon'
import RepeatIcon from './RepeatIcon'
import SearchIcon from './SearchIcon'
import SettingsIcon from './SettingsIcon'
import ShareIcon from './ShareIcon'
import StarIcon from './StarIcon'
import VisaIcon from './VisaIcon'

const Icons: { [name in IconName]: React.SFC } = {
  calendar: CalendarIcon,
  clock: ClockIcon,
  cross: CrossIcon,
  download: DownloadIcon,
  'eye-closed': EyeClosedIcon,
  'eye-opened': EyeOpenedIcon,
  hamburger: HamburgerIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  mastercard: MastercardIcon,
  mir: MirIcon,
  percent: PercentIcon,
  question: QuestionIcon,
  repeat: RepeatIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  share: ShareIcon,
  star: StarIcon,
  visa: VisaIcon,
}

const Icon: React.SFC<IconProps> = (props) => {
  const RenderedIcon = Icons[props.name]
  return (
    <RenderedIcon/>
  )
}

export default Icon
