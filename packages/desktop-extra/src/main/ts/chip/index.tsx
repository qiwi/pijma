import React, { FC } from 'react'

import { Box, Icon, styled, Typo } from '@qiwi/pijma-core'

import ChipProps from './ChipProps'

const Container = styled(Box)`
  border-radius: 100px;
  background-color: #e6e6e6;
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 10px;
  padding: 0 15px;
  align-items: center;
`

const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
`

const Chip: FC<ChipProps> = ({ onRemove, text = '' }) => {
  return (
    <Container height={10}>
      {text && (
        <Typo size={3.5} height={5} nowrap clamp={1}>
          {text}
        </Typo>
      )}
      <IconContainer onClick={onRemove}>
        <Icon name="cross" size="16px" />
      </IconContainer>
    </Container>
  )
}

export { Chip }
