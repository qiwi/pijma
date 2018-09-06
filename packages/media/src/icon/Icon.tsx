import React from 'react'

import IconName from './IconName'
import IconProps from './IconProps'

import AngleDownIcon from './AngleDownIcon'
import AngleUpIcon from './AngleUpIcon'
import AngleRightIcon from './AngleRightIcon'
import AngleLeftIcon from './AngleLeftIcon'
import AngleSmallDownIcon from './AngleSmallDownIcon'
import AngleSmallUpIcon from './AngleSmallUpIcon'
import AngleSmallRightIcon from './AngleSmallRightIcon'
import AngleSmallLeftIcon from './AngleSmallLeftIcon'
import ArrowDownIcon from './ArrowDownIcon'
import ArrowUpIcon from './ArrowUpIcon'
import ArrowRightIcon from './ArrowRightIcon'
import ArrowLeftIcon from './ArrowLeftIcon'
import BankIcon from './BankIcon'
import CalendarIcon from './CalendarIcon'
import CardIcon from './CardIcon'
import CheckIcon from './CheckIcon'
import ClockIcon from './ClockIcon'
import CrossIcon from './CrossIcon'
import DownloadIcon from './DownloadIcon'
import DotsHIcon from './DotsHIcon'
import DotsVIcon from './DotsVIcon'
import EnvelopeIcon from './EnvelopeIcon'
import EyeClosedIcon from './EyeClosedIcon'
import EyeOpenedIcon from './EyeOpenedIcon'
import FacebookIcon from './FacebookIcon'
import FileIcon from './FileIcon'
import FilterIcon from './FilterIcon'
import FilterActiveIcon from './FilterActiveIcon'
import HamburgerIcon from './HamburgerIcon'
import InstagramIcon from './IntagramIcon'
import LocationIcon from './LocationIcon'
import LoginIcon from './LoginIcon'
import LogoutIcon from './LogoutIcon'
import MastercardIcon from './MastercardIcon'
import McscIcon from './McscIcon'
import MirAcceptIcon from './MirAcceptIcon'
import MirIcon from './MirIcon'
import MobileIcon from './MobileIcon'
import OkIcon from './OkIcon'
import PassportIcon from './PassportIcon'
import PciDssIcon from './PciDssIcon'
import PhoneIcon from './PhoneIcon'
import PlayIcon from './PlayIcon'
import PlusIcon from './PlusIcon'
import PowerIcon from './PowerIcon'
import PrintIcon from './PrintIcon'
import PercentIcon from './PercentIcon'
import QuestionIcon from './QuestionIcon'
import QiwiIcon from './QiwiIcon'
import ReceiptIcon from './ReceiptIcon'
import RepeatIcon from './RepeatIcon'
import SearchIcon from './SearchIcon'
import SettingsIcon from './SettingsIcon'
import ShareIcon from './ShareIcon'
import StarIcon from './StarIcon'
import TerminalIcon from './TerminalIcon'
import TerminalClientIcon from './TerminalClientIcon'
import TwitterIcon from './TwitterIcon'
import VisaIcon from './VisaIcon'
import VisaVerifiedIcon from './VisaVerifiedIcon'
import VkIcon from './VkIcon'
import UserIcon from './UserIcon'
import YoutubeIcon from './YoutubeIcon'

const Icons: { [name in IconName]: React.SFC } = {
  'angle-right': AngleRightIcon,
  'angle-left': AngleLeftIcon,
  'angle-up': AngleUpIcon,
  'angle-down': AngleDownIcon,
  'angle-small-right': AngleSmallRightIcon,
  'angle-small-left': AngleSmallLeftIcon,
  'angle-small-up': AngleSmallUpIcon,
  'angle-small-down': AngleSmallDownIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  bank: BankIcon,
  calendar: CalendarIcon,
  card: CardIcon,
  check: CheckIcon,
  clock: ClockIcon,
  cross: CrossIcon,
  download: DownloadIcon,
  'dots-h': DotsHIcon,
  'dots-v': DotsVIcon,
  envelope: EnvelopeIcon,
  'eye-closed': EyeClosedIcon,
  'eye-opened': EyeOpenedIcon,
  facebook: FacebookIcon,
  file: FileIcon,
  filter: FilterIcon,
  'filter-active': FilterActiveIcon,
  hamburger: HamburgerIcon,
  instagram: InstagramIcon,
  location: LocationIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  mastercard: MastercardIcon,
  mcsc: McscIcon,
  'mir-accept': MirAcceptIcon,
  mir: MirIcon,
  mobile: MobileIcon,
  ok: OkIcon,
  passport: PassportIcon,
  'pci-dss': PciDssIcon,
  percent: PercentIcon,
  phone: PhoneIcon,
  play: PlayIcon,
  plus: PlusIcon,
  power: PowerIcon,
  print: PrintIcon,
  question: QuestionIcon,
  qiwi: QiwiIcon,
  receipt: ReceiptIcon,
  repeat: RepeatIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  share: ShareIcon,
  star: StarIcon,
  terminal: TerminalIcon,
  'terminal-client': TerminalClientIcon,
  twitter: TwitterIcon,
  user: UserIcon,
  visa: VisaIcon,
  'visa-verified': VisaVerifiedIcon,
  vk: VkIcon,
  youtube: YoutubeIcon,
}

const Icon: React.SFC<IconProps> = (props) => {
  const RenderedIcon = Icons[props.name]
  return (
    <RenderedIcon/>
  )
}

export default Icon
