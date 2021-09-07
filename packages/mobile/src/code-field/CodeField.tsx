import React, {Fragment} from 'react'

import {Input, CodeFieldControl, Stub, Typo, Box, keyframes, Flex, FlexItem} from '@qiwi/pijma-core'

import {CodeFieldProps} from './CodeFieldProps'

const animation = (count: number) => keyframes({
  '0%': {
    height: '48px',
  },
  [`${1 / count * 50}%`]: {
    height: '40px',
  },
  [`${1 / count * 100}%`]: {
    height: '48px',
  },
})

export const CodeField: React.FC<CodeFieldProps> = ({length = 4, autoFocus = false, loading = false, ...props}) => (
  props.stub ? (
    <Fragment>
      {Array(length).fill('').map((_, index) => (
        <Box ml={index === 0 ? 0 : 3} display="inline-block" key={index}>
          <Stub width={8} height={12} r={8}/>
        </Box>
      ))}
    </Fragment>
  ) : (
    <CodeFieldControl
      value={props.value}
      autoFocus={autoFocus}
      loading={loading}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onReady={props.onReady}
      children={(renderProps) => (
        <Box width={1} minHeight={12}>
          <Flex>
            {renderProps.values.map((item, index) => (
              <FlexItem ml={index === 0 ? 0 : 3} align="top" key={index}>
                <Input
                  cursor={props.disabled ? 'not-allowed' : undefined}
                  animation={loading ? `${animation(props.value.length)} ${450 * props.value.length}ms ease-in-out ${450 * index}ms infinite` : undefined}
                  autoFocus={autoFocus && index === 0}
                  css={{textAlign: 'center'}}
                  bg="#F2F2F2"
                  b={item.focused && !loading ? '1px solid #CCCCCC' : undefined}
                  autoComplete="off"
                  maxLength={1}
                  valueSize={5}
                  valueWeight={400}
                  width={8}
                  height={12}
                  r={8}
                  type={props.type}
                  disabled={props.disabled || loading}
                  ref={item.ref}
                  value={loading ? '' : props.value[index]}
                  onChange={e => item.onChange(e, index)}
                  onClick={e => item.onClick(e, index)}
                  onFocus={e => item.onFocus(e, index)}
                  onBlur={e => item.onBlur(e, index)}
                  onKeyDown={e => renderProps.onKeyDown(e, index)}
                />
              </FlexItem>
            ))}
          </Flex>
          {props.error ? (
            <Box mt={5}>
              <Typo
                display="block"
                color="#d0021b"
                weight={300}
                size={3.5}
                height={5}
                children={props.error}
              />
            </Box>
          ) : (
            null
          )}
        </Box>
      )}
    />
  )
)
