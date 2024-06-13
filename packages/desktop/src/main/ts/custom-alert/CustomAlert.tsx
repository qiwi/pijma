import {
  AlertBlockControl,
  Card,
  FlexItem,
  FlexPos,
  getDataProps,
  Icon,
  Pos,
} from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'


export interface CustomAlertProps {
  icon?: ReactNode
  shadow?: string
  bg: string
  textColor: 'inverse' | 'default'
  children?: ReactNode
  onHide?: () => void
}

export const CustomAlert: FC<CustomAlertProps> = ({
                                                    children,
                                                    icon,
                                                    bg,
                                                    shadow,
                                                    textColor,
                                                    onHide,
                                                    ...rest
                                                  }) => {
  return (
    <AlertBlockControl
      onHide={onHide}
      children={(renderProps) => (
        <Card
          {...getDataProps(rest)}
          bg={bg}
          r={10}
          transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
          s={shadow}
        >
          <FlexPos
            display="flex"
            type="relative"
            py={5}
            pl={6}
            pr={onHide !== undefined ? 18 : 6}
          >
            {icon && <FlexItem mr={3}>{icon}</FlexItem>}
            <FlexItem>
              {children}
            </FlexItem>
            {onHide !== undefined ? (
              <Pos
                cursor="pointer"
                type="absolute"
                right={6}
                top={5}
                onClick={renderProps.onCloseClick}
                onMouseEnter={renderProps.onCloseMouseEnter}
                onMouseLeave={renderProps.onCloseMouseLeave}
                children={
                  <Icon
                    size={6}
                    color={textColor === 'inverse' ? '#999' : '#666'}
                    name="cross-small"
                  />
                }
              />
            ) : null}
          </FlexPos>
        </Card>
      )}
    />
  )
}

CustomAlert.displayName = 'CustomAlert'
