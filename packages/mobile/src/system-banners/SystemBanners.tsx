import React, {FC} from 'react'
import {Flex, FlexItem, Icon, Card, SystemBannersControl} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface SystemBannersProps {
  text: string
  type: 'success' | 'warning' | 'error' | 'notice'
  onHide: () => any
  statical?: boolean
}

const SystemBannersBackgroundColor: {
  [type in NonNullable<SystemBannersProps['type']>]: string
} = {
  success: '#4bbd5c',
  warning: '#ff8c00',
  error: '#d0021b',
  notice: '#f5f5f5',
}
const SystemBannersIconName: {
  [type in NonNullable<SystemBannersProps['type']>]: any
} = {
  success: 'success',
  warning: 'warning',
  error: 'attention',
  notice: 'attention',
}
const SystemBannersIconColor: {
  [type in NonNullable<SystemBannersProps['type']>]: string
} = {
  success: '#ffffff',
  warning: '#ffffff',
  error: '#ffffff',
  notice: '#666',
}

export const SystemBanners: FC<SystemBannersProps> = ({type = 'notice', statical, text, onHide}) => (
  <SystemBannersControl
    onHide={onHide}
    children={renderProps => (
      <Card
        bg={SystemBannersBackgroundColor[type]}
      >
        <Flex
          minHeight={16}
          align={'center'}
          pt={2}
          pb={2}
        >
          <Flex mr={'auto'}>
            <FlexItem
              ml={4}
              mr={4}
              align={'center'}
              transform={`rotate(${type === 'notice' ? 180 : 0}deg)`}
            >
              <Icon
                size={6}
                name={SystemBannersIconName[type]}
                color={SystemBannersIconColor[type]}
              />
            </FlexItem>
            <FlexItem align={'center'}>
              <Paragraph
                color={type === 'notice' ? 'default' : 'inverse'}
                children={text}
              />
            </FlexItem>
          </Flex>
          <Flex
            justify={'flex-end'}
            ml={4}
          >
            {statical ? (null) : (
              <FlexItem
                mr={4}
                cursor={'pointer'}
                onClick={renderProps.onClick}
              >
                <Icon
                  size={6}
                  name={'cross'}
                  color={type === 'notice' ? '#666666' : '#ffffff'}
                />
              </FlexItem>
            )}
          </Flex>
        </Flex>
      </Card>
    )}
  />

)

SystemBanners.defaultProps = {
  type: 'notice',
  statical: false,
}
