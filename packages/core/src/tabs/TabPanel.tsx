import React, {ReactNode, Children} from 'react'

import {Card, Typo} from '../primitive'
import {TabsSpacer, TabsSpacerProps} from '@qiwi/pijma-core'

export class TabPanel extends React.Component<{} & TabsSpacerProps, {}> {

  public render() {
    const {children, size, ...props} = this.props
    const elements = Children.toArray(children).filter(child => !!child)
    if (elements.length === 0) {
      return null
    }
    return (
      <Card {...props}>
        <TabsSpacer
          size={size}
          children={Children.map(elements, (child: ReactNode, key: number) => (
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
        />
      </Card>
    )
  }

}

/* export const TabList: FC<{}> = ({center, children, border}) => {
  return (
    <Card bb={border ? '1px solid #e6e6e6' : ''} mb={4}>
        <Flex justify={center ? 'center' : 'flex-start'}>{children}</Flex>
      </Card>
  )
} */
