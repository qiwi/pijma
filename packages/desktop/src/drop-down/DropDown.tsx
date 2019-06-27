import React, {FC} from 'react'

import {Overlay, OverlayProps, Card, Pos} from '@qiwi/pijma-core'

export interface DropDownProps {
  show: boolean
  target: OverlayProps['target']
  container: OverlayProps['container']
  children: React.ReactElement
  onHide: () => void
  offset?: number
}

export const DropDown: FC<DropDownProps> = (props) => {
  return (
    <Overlay
      show={props.show}
      placement="bottom"
      target={props.target}
      container={props.container}
      rootClose={false}
      onHide={props.onHide}
      children={() => (
        <Pos type="absolute" top={props.offset} transition="transform 0.3s ease-in-out">
          <Card s="0 28px 52px 0 rgba(0, 0, 0, 0.16)" bg="#fff" r={10} pt={3} pb={3}>
            {props.children}
          </Card>
        </Pos>
      )}
    />
  )
}

DropDown.defaultProps = {
  offset: 0,
}
