import React, {FC, ReactNode} from 'react'
import {Box} from '@qiwi/pijma-core'
import {BlockLink} from '../link'
import {Paragraph} from '../typography'

export interface LogoCardProps {
  description?: string
  icon: ReactNode
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
}

export const LogoCard: FC<LogoCardProps> = ({title, icon, description, ...props}) => (
  <BlockLink {...props} accent>
    {() => (
      <Box
        p={3}
        minHeight={56}
        minWidth={45}
      >
        <Box
          width={18}
          height={18}
          mt={9}
          mx="auto"
        >
          {typeof icon === 'string' ? <img src={icon} alt={title}/> : icon}
        </Box>
        <Box mt={6} mx="auto" css={{textAlign: 'center'}}>
          <Paragraph
            color="default"
            size="m"
            bold
            children={title}
          />
        </Box>
        {description ? (
          <Box mt={1} mx="auto" css={{textAlign: 'center'}}>
            <Paragraph
              color="support"
              size="s"
              children={description}
            />
          </Box>
        ) : null}
      </Box>
    )}
  </BlockLink>
)
