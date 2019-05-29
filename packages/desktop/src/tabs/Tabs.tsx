import React, {FC} from 'react'

import {TabsControl} from '@qiwi/pijma-core'

export interface TabsProps {
  children: React.ReactNode
}

export const Tabs: FC<TabsProps> = props => <TabsControl {...props} />
