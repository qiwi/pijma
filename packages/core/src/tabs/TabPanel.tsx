import React, {ReactNode, Children} from 'react'

import {Box, Typo} from '../primitive'

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
          <Typo
            key={key}
            display="block"
            color="#000"
            weight={300}
            size={4}
            height={6}
            children={child}
          />
        ))}
      </Box>
    )
  }

}
