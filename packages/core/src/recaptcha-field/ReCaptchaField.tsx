import React, {FC, ReactNode} from 'react'

import {ReCaptcha, ReCaptchaProps} from '../recaptcha'
import {SimpleField} from '../field'

export interface ReCaptchaFieldProps extends ReCaptchaProps {
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
}

export const ReCaptchaField: FC<ReCaptchaFieldProps> = (props) => (
  <SimpleField
    input={(
      <ReCaptcha
        siteKey={props.siteKey}
        tabIndex={props.tabIndex}
        value={props.value}
        onChange={props.onChange}
      />
    )}
    error={props.error}
    action={props.action}
    help={props.help}
  />
)

ReCaptchaField.defaultProps = {
  tabIndex: 0,
}
