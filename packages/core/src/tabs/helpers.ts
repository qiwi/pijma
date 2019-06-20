import {isValidElement, ReactNode} from 'react'

import {Tab} from './Tab'
import {TabList} from './TabList'
import {TabPanel} from './TabPanel'

export const isTab = (obj: {} | ReactNode): obj is Tab => {
  return isValidElement(obj) && obj.type === Tab
}

export const isTabList = (obj: {} | ReactNode): obj is TabList => {
  return isValidElement(obj) && obj.type === TabList
}

export const isTabPanel = (obj: {} | ReactNode): obj is TabPanel => {
  return isValidElement(obj) && obj.type === TabPanel
}
