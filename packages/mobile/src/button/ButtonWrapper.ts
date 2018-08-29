import {ReactNode} from 'react'
import {rgba} from 'polished'

import {styled, SpinnerCircle} from '@qiwi/pijma-core'

import ButtonIcon from './ButtonIcon'
import ButtonContent from './ButtonContent'
import ButtonText from './ButtonText'
import ButtonLoad from './ButtonLoad'

interface ButtonWrapperProps {
  disabled?: boolean
  kind: 'brand' | 'simple'
  type: 'button' | 'submit'
  text?: string
  icon?: ReactNode
  loading?: boolean
}

const ButtonWrapper = styled.button<ButtonWrapperProps>((props) => ({
  display: 'inline-block',
  outline: 'none',
  fontFamily: 'inherit',
  fontStyle: 'normal',
  fontStretch: 'normal',
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: 'center',
  transition: 'all 333ms ease-in-out',
  color: (
    props.disabled ? (
      props.theme.color.gray.darkest
    ) : props.kind === 'brand' ? (
      props.theme.color.white
    ) : props.kind === 'simple' ? (
      props.theme.color.black
    ) : (
      undefined
    )
  ),
  cursor: (
    props.disabled ? (
      'not-allowed'
    ) : (
      'pointer'
    )
  ),
  backgroundColor: (
    props.disabled ? (
      props.theme.color.gray.light
    ) : props.kind === 'brand' ? (
      props.theme.color.brand
    ) : props.kind === 'simple' ? (
      props.theme.color.white
    ) : (
      undefined
    )
  ),
  backgroundClip: (
    props.disabled ? (
      undefined
    ) : props.kind === 'simple' ? (
      'padding-box'
    ) : (
      undefined
    )
  ),
  border: (
    props.disabled ? (
      `none`
    ) : props.kind === 'simple' ? (
      `1px solid ${rgba(props.theme.color.black, 0.14)}`
    ) : (
      'none'
    )
  ),
  borderRadius: 24,
  height: 48,
  width: (
    !props.icon || props.text ? (
      '100%'
    ) : (
      48
    )
  ),
  minWidth: (
    props.icon && !props.text ? (
      undefined
    ) : (
      150
    )
  ),
  margin: 0,
  padding: 0,
  fontSize: 16,
  '&:hover, &:focus': {
    backgroundColor: (
      !props.disabled && props.kind === 'brand' ? (
        '#ff8200'
      ) : (
        undefined
      )
    ),
    backgroundImage: (
      !props.disabled && props.kind === 'brand' ? (
        'none'
      ) : (
        undefined
      )
    ),
    border: (
      !props.disabled && props.kind === 'simple' ? (
        `1px solid ${rgba(props.theme.color.black, 0.3)}`
      ) : (
        undefined
      )
    ),
  },
  '&:active': {
    color: (
      props.disabled ? (
        undefined
      ) : props.kind === 'brand' ? (
        rgba(props.theme.color.white, 0.9)
      ) : props.kind === 'simple' ? (
        rgba(props.theme.color.black, 0.9)
      ) : (
        undefined
      )
    ),
    [ButtonIcon.toString()]: {
      fill: (
        props.disabled ? (
          undefined
        ) : props.kind === 'brand' ? (
          rgba(props.theme.color.white, 0.9)
        ) : props.kind === 'simple' ? (
          rgba(props.theme.color.black, 0.9)
        ) : (
          undefined
        )
      ),
    },
  },
  [ButtonContent.toString()]: {
    padding: (
      props.icon && !props.text ? (
        0
      ) : props.kind === 'simple' ? (
        '0px 31px'
      ) : (
        '0px 32px'
      )
    ),
  },
  [ButtonIcon.toString()]: {
    transition: 'all 333ms ease-in-out',
    opacity: props.loading ? 0 : 1,
    fill: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : props.kind === 'brand' ? (
        props.theme.color.white
      ) : props.kind === 'simple' ? (
        props.theme.color.black
      ) : (
        undefined
      )
    ),
    marginRight: (
      props.text ? (
        12
      ) : (
        0
      )
    ),
  },
  [ButtonText.toString()]: {
    transition: 'opacity 333ms ease-in-out',
    opacity: props.loading ? 0 : 1,
  },
  [ButtonLoad.toString()]: {
    transition: 'opacity 333ms ease-in-out',
    display: 'flex',
    opacity: props.loading ? 1 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  [SpinnerCircle.toString()]: {
    transition: 'stroke 333ms ease-in-out',
    stroke: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : props.kind === 'brand' ? (
        props.theme.color.white
      ) : props.kind === 'simple' ? (
        props.theme.color.brand
      ) : (
        undefined
      )
    ),
  },
}))

export default ButtonWrapper
