import {LinkControl} from '@qiwi/pijma-core'
import LinkControlProps from '@qiwi/pijma-core/link/LinkControlProps'

export const applyDefaultClickHandler = (onClick: LinkControlProps['onClick']) => {
  LinkControl.defaultProps.onClick = onClick
}
