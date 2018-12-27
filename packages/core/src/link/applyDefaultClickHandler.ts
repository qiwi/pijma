import {LinkControl, LinkControlProps} from './LinkControl'

export const applyDefaultClickHandler = (onClick: LinkControlProps['onClick']) => {
  LinkControl.defaultProps.onClick = onClick
}
