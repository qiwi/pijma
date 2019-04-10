import {LinkControl, LinkControlProps} from './LinkControl'

export const applyDefaultClickHandler = (onClick: LinkControlProps['onClick'] | undefined) => {
  LinkControl.defaultProps.onClick = onClick
}
