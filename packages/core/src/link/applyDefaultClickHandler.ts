import {LinkControl} from './LinkControl'
import {LinkControlProps} from './LinkControl'

export const applyDefaultClickHandler = (onClick: LinkControlProps['onClick']) => {
  LinkControl.defaultProps.onClick = onClick
}
