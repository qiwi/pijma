import React, {FC} from 'react'

import {TabList} from '@qiwi/pijma-core'

export interface TabsProps {
  vertical?: boolean
}

export const Tabs: FC<TabsProps> = (props) => <TabList {...props} />
