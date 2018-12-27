import {LinkControl} from '@qiwi/pijma-core'
import LinkControlProps from './LinkControlProps'

export const applyDefaultClickHandler = (onClick: LinkControlProps['onClick']) => {
  LinkControl.defaultProps.onClick = onClick
}
