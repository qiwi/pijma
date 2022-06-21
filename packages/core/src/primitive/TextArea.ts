import { styled, StyledOptions } from '../styled'
import { BoxNonProps, BoxProps, BoxStyles } from './Box'
import { CardNonProps, CardProps, CardStyles } from './Card'
import { pxValue } from './Value'

export interface TextAreaProps extends BoxProps, CardProps {
  valueSize?: number
  valueHeight?: number
  valueWeight?: number
  valueColor?: string
  valueTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  valueSpacing?: number
  placeholderSize?: number
  placeholderHeight?: number
  placeholderWeight?: number
  placeholderColor?: string
  placeholderTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'none'
  placeholderSpacing?: number
}

export const TextAreaNonProps: PropertyKey[] = [
  ...BoxNonProps,
  ...CardNonProps,
  'valueSize',
  'valueWeight',
  'valueColor',
  'valueHeight',
  'valueTransform',
  'valueSpacing',
  'placeholderSize',
  'placeholderHeight',
  'placeholderWeight',
  'placeholderColor',
  'placeholderTransform',
  'placeholderSpacing',
]

const TextAreaOptions: StyledOptions<TextAreaProps> = {
  shouldForwardProp: (prop) => !TextAreaNonProps.includes(prop),
}

export const TextArea = styled('textarea', TextAreaOptions)<TextAreaProps>(
  BoxStyles,
  CardStyles,
  ({ theme, ...props }) => ({
    fontFamily: theme.font.family,
    fontSize: pxValue(props.valueSize, theme.scale),
    fontWeight: props.valueWeight,
    lineHeight: pxValue(props.valueHeight, theme.scale),
    color: props.valueColor,
    textTransform: props.valueTransform,
    textIndent: 0,
    letterSpacing: pxValue(props.valueSpacing),
    outline: 'none',
    resize: 'none',
    MozAppearance: 'textfield',
    '&::placeholder': {
      fontSize: pxValue(props.placeholderSize, theme.scale),
      fontWeight: props.placeholderWeight,
      lineHeight: pxValue(props.placeholderHeight, theme.scale),
      color: props.placeholderColor,
      textTransform: props.placeholderTransform,
      letterSpacing: pxValue(props.placeholderSpacing),
    },
  }),
)
