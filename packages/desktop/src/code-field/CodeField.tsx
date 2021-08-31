import React, {Fragment} from 'react'

import {Input, CodeFieldControl, Stub, Typo, Box, Pos} from '@qiwi/pijma-core'

import {CodeFieldProps} from './CodeFieldProps'

export const CodeField: React.FC<CodeFieldProps> = ({length = 4, autoFocus = false, ...props}) => (
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
      length={length}
      autoFocus={autoFocus}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onReady={props.onReady}
      children={(renderProps) => (
        <Pos type="relative" width={1}>
          <Fragment>
            {renderProps.values.map((item, index) => (
              <Box ml={index === 0 ? 0 : 3} display="inline-block" key={index}>
                <Input
                  autoFocus={autoFocus && index === 0}
                  css={{textAlign: 'center'}}
                  bg="#F2F2F2"
                  maxLength={1}
                  valueSize={5}
                  valueWeight={400}
                  width={8}
                  height={12}
                  r={8}
                  type={props.type}
                  disabled={props.disabled}
                  ref={item.ref}
                  value={props.value[index]}
                  onChange={e => item.onChange(e, index)}
                  onClick={e => item.onClick(e, index)}
                  onFocus={e => item.onFocus(e, index)}
                  onKeyDown={e => renderProps.onKeyDown(e, index)}
                />
              </Box>
            ))}
          </Fragment>
          {props.error ? (
            <Box mt={5}>
              <Typo
                display="block"
                color="#d0021b"
                weight={300}
                size={3.5}
                height={4}
                children={props.error}
              />
            </Box>
          ) : (
            null
          )}
        </Pos>
      )}
    />
  )
)
