import React, {ReactNode, Children} from 'react'

import {Box} from '../primitive'

export class TabPanel extends React.Component<{}, {}> {

  public render() {
    const {children} = this.props
    const elements = Children.toArray(children).filter(child => !!child)
    if (elements.length === 0) {
      return null
    }
    return (
      <Box>
        {Children.map(elements, (child: ReactNode, key: number) => (
          <Box key={key} children={child} />
        ))}
      </Box>
    )
  }

}
