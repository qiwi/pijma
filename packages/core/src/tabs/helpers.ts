import React from 'react'

import {Tab} from './Tab'
import {TabList} from './TabList'
import {TabPanel} from './TabPanel'

export const isTab = (obj: {}): obj is Tab => {
  return React.isValidElement(obj) && obj.type === Tab
}

export const isTabList = (obj: {}): obj is TabList => {
  return React.isValidElement(obj) && obj.type === TabList
}

export const isTabPanel = (obj: {}): obj is TabPanel => {
  return React.isValidElement(obj) && obj.type === TabPanel
}
