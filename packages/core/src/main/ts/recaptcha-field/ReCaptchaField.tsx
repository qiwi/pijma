import React, { FC, ReactNode } from 'react'

import { getDataProps } from '../dataProps'
import { SimpleField } from '../field'
import { ReCaptcha, ReCaptchaProps } from '../recaptcha'

export interface ReCaptchaFieldProps extends ReCaptchaProps {
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
}

export const ReCaptchaField: FC<ReCaptchaFieldProps> = (props) => (
  <SimpleField
    {...getDataProps(props)}
    input={
      <ReCaptcha
        siteKey={props.siteKey}
        tabIndex={props.tabIndex}
        value={props.value}
        onChange={props.onChange}
        onErrored={props.onErrored}
        asyncScriptOnLoad={props.asyncScriptOnLoad}
      />
    }
    error={props.error}
    action={props.action}
    help={props.help}
  />
)

ReCaptchaField.displayName = 'ReCaptchaField'

ReCaptchaField.defaultProps = {
  tabIndex: 0,
}
